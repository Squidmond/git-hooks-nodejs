const mult = require('../src/mult');

// it is a jest function
it('Should return corrent mult', () => {
    const result = mult(2, 5);
    expect(result).toBe(10);
});