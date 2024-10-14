export default function(fn, ms) {
  let timer;

  const debouncedFn = (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, ms);
  };

  debouncedFn.cancel = () => {
    if (timer) {
      clearTimeout(timer);
    }
  };

  return debouncedFn;
}
