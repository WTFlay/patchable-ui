export function patchable<T extends Function & { override?: T }>(
  Component: T
): T {
  return new Proxy(Component, {
    apply: (target, _thisArg, argumentList) => {
      if (target.override) {
        return target.override(...argumentList);
      }
      return target(...argumentList);
    },
  });
}
