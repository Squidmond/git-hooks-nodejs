const sum = require('../src/sum');

// it is a jest function
it('Should return corrent sum', () => {
    const result = sum(2, 5);
    expect(result).toBe(7);
});
