import {TextStyle} from 'react-native';
import {GlobalColor} from '../../models/styleModel';
import primitive from '../../styles/primitive';

export interface GlobalTextProps {
  text: string;
  fontSize: number;
  color: GlobalColor;
  lineHeight?: number;
  textAlign?: 'center' | 'right' | 'left';
  style?: TextStyle;
  numberOfLines?: number;
  testId?: string;
  fontFamily: keyof typeof primitive.fonts;
}
