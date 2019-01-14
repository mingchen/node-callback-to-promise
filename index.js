const { VError } = require('verror');

/**
 * encapsulate a method with a node-style callback in a Promise
 *
 * @param {function} fn        function to be encapsulated
 * @param {object}   context   'this' of the encapsulated function
 * @param {Array-like} args    to be passed to the called function
 *
 * @return {Promise}           a Promise encapsulating the function
 *
 * Example:
 *
 * if (!cb) {
 *     return promises.promise(authenticate, this, [username, password]);
 * }
 */
function promise(fn, context, args) {

    //can't do anything without Promise so fail silently
    if (typeof Promise === 'undefined') {
        throw new VError('Promise object not exist, check your node version');
    }

    if (!Array.isArray(args)) {
        args = Array.prototype.slice.call(args);
    }

    if (typeof fn !== 'function') {
        return Promise.reject(new VError('fn must be a function'));
    }

    return new Promise(function (resolve, reject) {
        args.push(function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });

        fn.apply(context, args);
    });
}

module.exports = {
    promise
};
