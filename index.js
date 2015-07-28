/**
 * Make your function arguments an array
 */


"use strict";


exports = module.exports = function(args) {
    return Array.prototype.slice.call(args);
};
