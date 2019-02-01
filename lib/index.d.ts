/**
 * encapsulate a method with a node-style callback in a Promise
 *
 * @param {function} fn        function to be encapsulated
 * @param {object}   context   'this' of the encapsulated function
 * @param {Array<any>} args    to be passed to the called function
 *
 * @returns {Promise<any>}           a Promise encapsulating the function
 *
 * Example:
 *
 * if (!cb) {
 *     return promises.promise(authenticate, this, [username, password]);
 * }
 */
export declare function promise(fn: Function, context: object, args: Array<any>): Promise<any>;
