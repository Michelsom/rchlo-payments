import {render} from '@testing-library/react-native';
import React from 'react';
import {HeaderComponent} from '../../components/HeaderComponent';

describe('HeaderComponent', () => {
  it('renders titleText when provided', () => {
    const {getByText} = render(<HeaderComponent titleText="Test Title" />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('does not render titleText when not provided', () => {
    const {queryByText} = render(<HeaderComponent />);
    expect(queryByText('Test Title')).toBeNull();
  });

  it('renders leftIconName when provided', () => {
    const {getByTestId} = render(
      <HeaderComponent leftIconName="left-icon" handleLeftAction={() => {}} />,
    );
    expect(getByTestId('left-icon')).toBeTruthy();
  });

  it('does not render leftIconName when not provided', () => {
    const {queryByTestId} = render(<HeaderComponent />);
    expect(queryByTestId('header-icon')).toBeNull();
  });

  it('renders rightIconName when provided', () => {
    const {getByTestId} = render(
      <HeaderComponent rightIconName="right-icon" />,
    );
    expect(getByTestId('right-icon')).toBeTruthy();
  });

  it('does not render rightIconName when not provided', () => {
    const {queryByTestId} = render(<HeaderComponent />);
    expect(queryByTestId('')).toBeNull();
  });
});
