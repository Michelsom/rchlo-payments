import primitive from '../styles/primitive';

export type Colors = keyof typeof primitive.colors;
export type ColorShades<Color extends Colors> =
  keyof (typeof primitive.colors)[Color];
export type ColorWithShade = `${Colors}.${ColorShades<Colors>}`;
export type GlobalColor = ColorWithShade;
