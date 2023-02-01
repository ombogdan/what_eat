// fieldSort(sortedArray[i]["data"], ['is_confirmed'])
export default function fieldSort(
  arr: any[],
  fields: string[],
  reverse: boolean,
) {
  if (reverse) {
    return arr.slice().sort((a, b) =>
      fields.reduce((c, d, e, f) => {
        // eslint-disable-next-line no-underscore-dangle
        const _a = a[d] || 0;
        const _b = b[d] || 0;
        // eslint-disable-next-line no-nested-ternary
        return (
          c +
          (f.length - e) *
            ((typeof _a === 'string' ? _a.toLocaleLowerCase() : _a) >
            (typeof _b === 'string' ? _b.toLocaleLowerCase() : _b)
              ? -1
              : (typeof _a === 'string' ? _a.toLocaleLowerCase() : _a) <
                (typeof _b === 'string' ? _b.toLocaleLowerCase() : _b)
              ? 1
              : 0)
        );
      }, 0),
    );
  }
  return arr.slice().sort((a, b) =>
    fields.reduce((c, d, e, f) => {
      // eslint-disable-next-line no-underscore-dangle
      const _a = a[d] || 0;
      const _b = b[d] || 0;
      // eslint-disable-next-line no-nested-ternary
      return (
        c +
        (f.length - e) *
          ((typeof _a === 'string' ? _a.toLocaleLowerCase() : _a) >
          (typeof _b === 'string' ? _b.toLocaleLowerCase() : _b)
            ? 1
            : (typeof _a === 'string' ? _a.toLocaleLowerCase() : _a) <
              (typeof _b === 'string' ? _b.toLocaleLowerCase() : _b)
            ? -1
            : 0)
      );
    }, 0),
  );
}
