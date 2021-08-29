export const snakeToCamelObjKey = (obj) => {
  const newObj: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof key === 'string') {
      const newKey = key
        .toLowerCase()
        .replace(/([_][a-z])/g, (group) =>
          group.toUpperCase().replace('_', '')
        );
      newObj[newKey] = value;
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
};
