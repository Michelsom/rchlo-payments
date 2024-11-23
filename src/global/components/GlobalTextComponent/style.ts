import styled from 'styled-components/native';
import {GetColor} from '../../../utils/getColor';
import primitive from '../../styles/primitive';
import {GlobalTextProps} from './model';

export const GlobalText = styled.Text<GlobalTextProps>`
  font-size: ${({fontSize}) => fontSize}px;
  color: ${({color}) => GetColor(color)};
  line-height: ${({lineHeight, fontSize}) => lineHeight || fontSize + 2}px;
  text-align: ${({textAlign}) => textAlign || 'left'};
  font-family: ${({fontFamily}) => primitive.fonts[fontFamily]};
`;
