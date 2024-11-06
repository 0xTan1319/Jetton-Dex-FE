import { isObjectWithValues } from "../validations/object";

export const fromObjectToCssVariables = (vars) => {
  const varsFormatted =
    isObjectWithValues(vars) &&
    Object.entries(vars).reduce((allVars, currentVar) => {
      return allVars.concat(
        " ",
        `--${currentVar[0].replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())}:${
          currentVar[1]
        };`
      );
    }, "");

  return varsFormatted;
};
