const isArray = value => Array.isArray(value);
const isArrayWithItems = value => isArray(value) && value.length > 0;

export { isArrayWithItems, isArray };
