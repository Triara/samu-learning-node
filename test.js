'use strict';

const should = require('chai').should(),
    machacker = require('./json-machacker.js');

describe('Join arrays', function(){
    it('join two single-item arrays', function(){
        let firstArray = [111];
        let secondArray = [222];

        let result = machacker.joinArrays(firstArray, secondArray);
        result.should.equal([111, 222]);
    });
});
