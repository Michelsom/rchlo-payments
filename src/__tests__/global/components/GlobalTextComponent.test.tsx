import {render} from '@testing-library/react-native';
import React from 'react';
import {GlobalTextComponent} from '../../../global/components/GlobalTextComponent';
import {GlobalTextProps} from '../../../global/components/GlobalTextComponent/model';
import primitive from '../../../global/styles/primitive';
import {GetColor} from '../../../utils/getColor';

describe('GlobalTextComponent', () => {
  const defaultProps: GlobalTextProps = {
    color: 'Green.0',
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 20,
    style: {},
    numberOfLines: 1,
    text: 'Test Text',
    testId: 'global-text',
    fontFamily: 'montserratBlack',
  };

  it('renders correctly with given props', () => {
    const {getByTestId} = render(<GlobalTextComponent {...defaultProps} />);
    const globalTextElement = getByTestId('global-text');

    expect(globalTextElement).toBeTruthy();
    expect(globalTextElement).toHaveStyle({
      color: GetColor(defaultProps.color),
    });
    expect(globalTextElement).toHaveStyle({fontSize: defaultProps.fontSize});
    expect(globalTextElement).toHaveStyle({textAlign: defaultProps.textAlign});
    expect(globalTextElement).toHaveStyle({
      lineHeight: defaultProps.lineHeight,
    });
    expect(globalTextElement).toHaveStyle({
      fontFamily: primitive.fonts[defaultProps.fontFamily],
    });
    expect(globalTextElement).toHaveTextContent(defaultProps.text);
  });

  it('renders with default props when no props are provided', () => {
    const {getByTestId} = render(<GlobalTextComponent {...defaultProps} />);
    const globalTextElement = getByTestId('global-text');

    expect(globalTextElement).toBeTruthy();
  });
});
