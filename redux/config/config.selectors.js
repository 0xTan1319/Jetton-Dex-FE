export const selectConfig = (store) => store?.config;
export const selectConfigThemeId = (store) => store?.config?.theme?.id;
export const selectConfigThemeModifyVars = (store) =>
  store?.config?.theme?.modifyVars;
