import 'styled-components';
import primitive from './primitive';

declare module 'styled-components' {
  type ThemeType = typeof primitive;
  export interface DefaultTheme extends ThemeType {}
}
