import {GlobalColor} from '../global/models/styleModel';
import primitive from '../global/styles/primitive';

export const GetColor = (colorKey: GlobalColor) => {
  const [colorCategory, shade] = colorKey.split('.') as [string, string];
  const colorObject =
    primitive.colors[colorCategory as keyof typeof primitive.colors];
  if (colorObject && shade in colorObject) {
    return colorObject[shade as unknown as keyof typeof colorObject];
  }
  return colorCategory;
};
