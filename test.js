/**
 * Tests
 */


/* eslint-env mocha */


"use strict";


// npm-installed modules
var should = require("should");


// own modules
var argumentsToArray = require("./index");


describe("module", function() {
    it("exports a function", function() {
        should(argumentsToArray).be.a.Function();
    });
});


describe("argumentsToArray", function() {
    it("converts arguments to an array", function() {
        function sample() {
            return argumentsToArray(arguments);
        }
        should.deepEqual(sample(1, 2, 3), [1, 2, 3]);
    });
});
