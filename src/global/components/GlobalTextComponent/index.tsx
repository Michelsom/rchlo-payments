import React from 'react';
import {GlobalTextProps} from './model';
import {GlobalText} from './style';

export const GlobalTextComponent = (props: GlobalTextProps) => {
  const {
    color,
    fontSize,
    textAlign,
    lineHeight,
    style,
    numberOfLines,
    text,
    testId,
    fontFamily,
  } = props;

  return (
    <GlobalText
      color={color}
      fontSize={fontSize}
      textAlign={textAlign}
      lineHeight={lineHeight}
      testID={testId}
      style={style}
      numberOfLines={numberOfLines}
      fontFamily={fontFamily}
      text={text}>
      {text}
    </GlobalText>
  );
};
