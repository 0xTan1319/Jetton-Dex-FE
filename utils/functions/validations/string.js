const isString = value => typeof value === 'string';
const isStringWithCharacters = value => isString(value) && value.length > 0;

export { isStringWithCharacters, isString };
