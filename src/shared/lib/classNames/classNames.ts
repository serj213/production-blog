type TModsClassNames = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: TModsClassNames = {},
  additional: string[] = []
): string => {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls, value]) => cls),
  ].join(" ");
};
