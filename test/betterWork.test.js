const { isTypedArray } = require('util/types');
const MathWiz = require('../lib/MathWiz');

describe("Math Skills",() =>{
    it("should return the sum of any given amount of numbers",()=>{
        const wiz =new MathWiz();

        expect(wiz.sum(5, 30, 20)).toEquial(55);
    });
});