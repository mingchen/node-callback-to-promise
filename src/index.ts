/**
 * Encapsulate a method with a node-style callback in a Promise
 *
 * @param {function} fn        function to be encapsulated
 * @param {object}   context   'this' of the encapsulated function
 * @param {Array<any>} args    to be passed to the called function
 *
 * @returns {Promise<any>}     a Promise encapsulating the function
 *
 * Example:
 *
 * if (!cb) {
 *     return promises.promise(authenticate, this, [username, password]);
 * }
 */
export function promise(fn: Function, context: object, args: Array<any>): Promise<any> {
  //can't do anything without Promise so fail silently
  if (typeof Promise === 'undefined') {
    throw new Error('Promise object not exist, check your node version');
  }

  if (!Array.isArray(args)) {
    args = Array.prototype.slice.call(args);
  }

  if (typeof fn !== 'function') {
    return Promise.reject(new Error('fn must be a function'));
  }

  return new Promise(function(resolve, reject) {
    args.push(function(err: Error, data: any) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });

    fn.apply(context, args);
  });
}
