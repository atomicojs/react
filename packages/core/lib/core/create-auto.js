import { getDefinition } from '@atomico/wrapper';

const createAuto = (wrapper) => (base) => {
  const [tagName, options] = getDefinition(base, true);
  return wrapper(tagName, base, options);
};

export { createAuto };
