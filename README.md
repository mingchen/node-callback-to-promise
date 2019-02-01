# node-callback-to-promise

[![NPM](https://nodei.co/npm/node-callback-to-promise.png?downloads=true)](https://nodei.co/npm/node-callback-to-promise/)

## Introduction

Encapsulate a method with a node-style callback in a Promise.

## API

    //
    // encapsulate a method with a node-style callback in a Promise
    //
    // @param {function} fn        function to be encapsulated
    // @param {object}   context   'this' of the encapsulated function
    // @param {Array<any>} args    to be passed to the called function
    //
    // @return {Promise}           a Promise encapsulating the function
    //
    function promise(fn, context, args)

## Install

    npm install node-callback-to-promise

## Usage

Suppose you provide an API with callback,
but you also want to return Promise if caller not pass callback.
`callback-to-promise` will help you in this scenario. Here is an example:

    const callbackToPromise = require('node-callback-to-promise');

    userSchema.methods.authenticate = function authenticate(plainTextPassword, callback) {
        if (!callback) {
            // if no callback, return a promise
            return callbackToPromise.promise(authenticate, this, [plainTextPassword]);
        }

        ...
    }

## References

* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
