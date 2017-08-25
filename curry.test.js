const curry = require('./');

describe('curry', () => {

  it('should defined', () => {
    expect(curry).toBeDefined();
  });

  it('should return a function', () => {
    const fn = curry(jest.fn());
    expect(typeof fn).toEqual('function');
  })

  it('curried function should work correctly', () => {
    const fn = curry((a, b) => a + b);
    expect(fn(1,2)).toEqual(3);
    expect(fn(1)(2)).toEqual(3);
  })

});
