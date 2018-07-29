'use strict';

const test = require('tape');
const mockRequire = require('mock-require');
const mul = require('..');

const {BigInt} = global;

const bigIntMul = (a, b) => {
    return String(bigMul(a, b))
        .split('')
        .map(Number);
}

const toBig = (a) => BigInt(a.join(''));
const bigMul = (a, b) => toBig(a) * toBig(b);

test('mul: 1 char', (t) => {
    const result = mul([1], [2]);
    const expect = [2];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
});

test('mul: 2 chars', (t) => {
    const result = mul([1, 2], [2, 3]);
    const expect = [2, 7, 6];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
});

test('mul: 3 chars', (t) => {
    const result = mul([1, 2, 3], [2, 3, 4]);
    const expect = [2, 8, 7, 8, 2];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
});

test('mul: 4 chars', (t) => {
    const result = mul([1, 2, 3, 4], [1, 0, 0, 0, 0]);
    const expect = [1, 2, 3, 4, 0, 0, 0, 0];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
});

test('mul: no args', (t) => {
    t.throws(mul, /a should be an array!/, 'should throw when no args');
    t.end();
});

test('mul: no b', (t) => {
    const fn = () => mul([]);
    t.throws(fn, /b should be an array!/, 'should throw when no args');
    t.end();
});

test('mul: 1 char: no BigInt', (t) => {
    const {BigInt} = global;
    global.BigInt = undefined;
    const mul = mockRequire.reRequire('..');
    const result = mul([1], [2]);
    const expect = [2];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
    
    global.BigInt = BigInt;
});

test('mul: 2 char: no BigInt', (t) => {
    const {BigInt} = global;
    global.BigInt = undefined;
    const mul = mockRequire.reRequire('..');
    const result = mul([1, 0], [2, 0]);
    const expect = [2, 0, 0];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
    
    global.BigInt = BigInt;
});

test('mul: 1 char: overflow: no BigInt', (t) => {
    const {BigInt} = global;
    global.BigInt = undefined;
    const mul = mockRequire.reRequire('..');
    const result = mul([9], [9]);
    const expect = [8, 1];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
    
    global.BigInt = BigInt;
});

test('mul: 8 chars: no BigInt', (t) => {
    const {BigInt} = global;
    global.BigInt = undefined;
    
    const mul = mockRequire.reRequire('..');
    
    const a = [1, 2, 3, 4, 5, 6, 7, 8];
    const b = [1, 0, 0, 0, 0, 0, 0, 0];
    
    const result = mul(a, b);
    const expect = [1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0, 0, 0, 0];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
    
    global.BigInt = BigInt;
});

test('mul: 10 chars: no BigInt', (t) => {
    const {BigInt} = global;
    global.BigInt = undefined;
    
    const mul = mockRequire.reRequire('..');
    
    const a = [1, 2, 3, 5, 6, 7, 8, 9, 0];
    
    const result = mul(a, a);
    const expect = bigIntMul(a, a);
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
    
    global.BigInt = BigInt;
});

test('mul: different digits count: no BigInt', (t) => {
    const {BigInt} = global;
    global.BigInt = undefined;
    
    const mul = mockRequire.reRequire('..');
    
    const a = [1];
    const b = [1, 2];
    
    const result = mul(a, b);
    const expect = [1, 2];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
    
    global.BigInt = BigInt;
});

test('mul: different digits count: more and less: no BigInt', (t) => {
    const {BigInt} = global;
    global.BigInt = undefined;
    
    const mul = mockRequire.reRequire('..');
    
    const a = [1, 2];
    const b = [1];
    
    const result = mul(a, b);
    const expect = [1, 2];
    
    t.deepEqual(result, expect, 'should equal');
    t.end();
    
    global.BigInt = BigInt;
});

