import { sum } from "../DummyJSForTest/sum";

test('Sum function should calculate sum of two numbers', () => { 
    const result = sum(1,2);
    // Assertion
    expect(result).toBe(3);
 })