export const checkEmptyObject = (obj, excludeKeys) => {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (!excludeKeys?.includes(keys[i]) && !obj[keys[i]]) return false;
  }
  return true;
};
