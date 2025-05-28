export const replaceUrl = (
  url: string,
  id: string | string[],
  value: string | string[]
): string => {
  if (Array.isArray(id) && Array.isArray(value)) {
    if (id.length !== value.length) {
      throw new Error("ID and value arrays must be of the same length");
    }

    return id.reduce((acc, key, i) => acc.replace(`:${key}`, value[i]), url);
  }

  if (typeof id === "string" && typeof value === "string") {
    return url.replace(`:${id}`, value);
  }

  throw new Error(
    "Mismatched parameter types: both 'id' and 'value' must be either strings or arrays of equal length"
  );
};
