const isObject = value => typeof value === 'object';
const isObjectWithValues = value =>
  isObject(value) && Object.keys(value).length > 0;

export { isObject, isObjectWithValues };
