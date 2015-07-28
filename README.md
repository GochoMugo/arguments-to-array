
# arguments-to-array

> Make your function arguments into an actual array

[![node](https://img.shields.io/node/v/arguments-to-array.svg?style=flat-square)](https://www.npmjs.com/package/arguments-to-array) [![npm](https://img.shields.io/npm/v/arguments-to-array.svg?style=flat-square)](https://www.npmjs.com/package/arguments-to-array) [![Travis](https://img.shields.io/travis/GochoMugo/arguments-to-array.svg?style=flat-square)](https://travis-ci.org/GochoMugo/arguments-to-array) [![Gemnasium](https://img.shields.io/gemnasium/GochoMugo/arguments-to-array.svg?style=flat-square)](https://gemnasium.com/GochoMugo/arguments-to-array) [![Coveralls](https://img.shields.io/coveralls/GochoMugo/arguments-to-array.svg?style=flat-square)](https://coveralls.io/github/GochoMugo/arguments-to-array?branch=master)


## installation:

```bash
⇒ npm install arguments-to-array
```


## arguments:

> The arguments object is an **Array-like** object corresponding to the arguments passed to a function.
>
> The arguments object is **not** an Array. It is similar to an Array, but does **not** have any Array properties except length. For example, it does not have the pop method. However it can be converted to a real Array:
>
> ```js
> var args = Array.prototype.slice.call(arguments);
> ```
>
> From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

**arguments** is similar to an Array due to the indexing of its values. Like an array is indexed, keys in **arguments** are integers with their order zero-based.


## why this module:

This module (or rather this repo) aims to hold some curated information on **arguments**. It is helpful for JavaScript beginners who wonder why the heck **arguments.forEach()** is not working! Plus it is easier to remember:

```js
var argumentsToArray = require("arguments-to-array");

function example() {
    var array = argumentsToArray(arguments);
}
```

Also, see [this discussion on one-line modules](https://github.com/sindresorhus/ama/issues/10).


## possible alternatives:

### lodash

If you are using **lodash** you need not add this module to your dependencies list. See [lodash docs on _.toArray](https://lodash.com/docs#toArray)

```js
var _ = require("lodash");

function example() {
    var array = _.toArray(arguments);
}
```


## credits:

* [volkovasystems/arguments-to-array](https://github.com/volkovasystems/arguments-to-array) existed before this repo was born!


## license:

*Source code is licensed under the __The MIT License (MIT)__*

Copyright (c) 2015 GochoMugo <mugo@forfuture.co.ke>
