/**
 * Returns a curried equivalent of the provided function.
 * (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @param {Function} New curried function.
 */
const curry = fn =>
  (...args) =>
    args.length < fn.length
      ? (...rest) => curry(fn)(...args, ...rest)
      : fn(...args);

module.exports = curry;

