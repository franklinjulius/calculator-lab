// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add } from './utilis.js';
import { subtract } from './utilis.js';
import { multiply } from './utilis.js';
import { divide } from './utilis.js';


const test = QUnit.test;

test('add should take in 15 and 45 and return 60', (expect) => {

    const expected = 60;
    const actual = add(15, 45);
    expect.equal(actual, expected);
});

test('subtract should take 26 from 30 and return 4', (expect) => {

    const expected = 4;
    const actual = subtract(30, 26);
    expect.equal(actual, expected);
});

test('multiply should multiply 16 time 4 and return 64', (expect) => {

    const expected = 64;
    const actual = multiply(16, 4);
    expect.equal(actual, expected);
});


test('divide should divide 160 by 20', (expect) => {
    const expected = 8;
    const actual = divide(160, 20);
    expect.equal(actual, expected);
});
