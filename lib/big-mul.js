'use strict';

const {rawSum} = require('big-sum');
const bigWrap = require('big-wrap');

module.exports = bigMul;

function bigMul(a, b) {
    check(a, b);
    
    if (typeof BigInt !== 'undefined')
        return bigIntMul(a, b);
    
    let aI = a.length + 1;
    let bI = b.length + 1;
    
    const numbers = [];
    let zeros = [];
    
    while (--aI) {
        const currentA = a[aI - 1];
        let j = bI;
        let currentNumber = [];
        
        if (currentA) {
            while (--j) {
                const currentB = b[j - 1];
                const full = currentA * currentB;
                
                currentNumber.unshift(full);
            }
            
            currentNumber = currentNumber.concat(zeros);
            numbers.unshift(currentNumber);
        }
        
        zeros = zeros.concat(0);
    }
    
    let i = numbers.length;
    let sum = numbers[i - 1];
    
    while (--i > 0)
        sum = rawSum(numbers[i - 1], sum);
    
    return bigWrap(sum);
}

const bigIntMul = (a, b) => {
    const bigA = BigInt(a.join(''));
    const bigB = BigInt(b.join(''));
    
    return String(bigA * bigB)
        .split('')
        .map(Number);
};

function check(a, b) {
    if (!Array.isArray(a))
        throw Error('a should be an array!');
    
    if (!Array.isArray(b))
        throw Error('b should be an array!');
}

