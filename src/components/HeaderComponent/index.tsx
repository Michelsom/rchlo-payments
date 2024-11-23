import React from 'react';
import {View} from 'react-native';
import {GlobalIconButton} from '../../global/components/GlobaIconButton';
import {GlobalTextComponent} from '../../global/components/GlobalTextComponent';
import {HeaderContainer} from './styles';

const RenderIconButton = ({
  action,
  iconName,
}: {
  iconName?: string;
  action?: () => void;
}) =>
  iconName ? (
    <GlobalIconButton
      iconName={iconName}
      action={action}
      iconColor={'Green.900'}
      iconSize={28}
    />
  ) : (
    <View />
  );

export const HeaderComponent = ({
  handleLeftAction,
  handleRightAction,
  titleText,
  leftIconName,
  rightIconName,
}: {
  handleLeftAction?: () => void;
  handleRightAction?: () => void;
  titleText?: string;
  leftIconName?: string;
  rightIconName?: string;
}) => {
  return (
    <HeaderContainer>
      <RenderIconButton iconName={leftIconName} action={handleLeftAction} />
      {titleText ? (
        <GlobalTextComponent
          color="Neutral.800"
          fontSize={22}
          lineHeight={24}
          fontFamily="montserratLight"
          text={titleText}
        />
      ) : (
        <View />
      )}
      <RenderIconButton iconName={rightIconName} action={handleRightAction} />
    </HeaderContainer>
  );
};
