import React, {memo} from 'react';
import * as Icons from '../../assets/icons/creditCards';
import {GlobalIcon} from '../../global/components/GlobalIcons';
import {GlobalTextComponent} from '../../global/components/GlobalTextComponent';
import * as S from './styles';
interface SelectPaymentButtonProps {
  handleButton: () => void;
  title: string;
  description?: string;
  selected: boolean;
  brandCard?: string;
  hasRadio?: boolean;
  iconName?: string;
}
const iconsMap: {[key: string]: React.ReactNode} = {
  amex: <Icons.AmericanExpress width={25} height={25} TestId="amex-icon" />,
  diners: <Icons.Diners width={25} height={25} />,
  elo: <Icons.Elo width={25} height={25} />,
  hipercard: <Icons.Hipercard width={25} height={25} />,
  master: <Icons.MasterCard width={25} height={25} />,
  visa: <Icons.Visa width={25} height={25} />,
};

export const SelectPaymentButton = memo(
  ({
    handleButton,
    title,
    description,
    selected,
    brandCard,
    hasRadio,
    iconName,
  }: SelectPaymentButtonProps) => (
    <S.ButtonContainer
      testID="button-container"
      onPress={handleButton}
      hasDescription={!description}>
      {hasRadio ? (
        <S.RadioContainer testID="radio-button">
          <GlobalIcon
            iconName={selected ? 'radio-button-on' : 'radio-button-off'}
            color="Green.600"
            size={24}
          />
        </S.RadioContainer>
      ) : null}
      <S.CardInfoContainer style={{marginLeft: hasRadio ? 12 : 0}}>
        <S.CardDetails testID={`${brandCard}-icon`}>
          {brandCard ? iconsMap[brandCard.toLowerCase()] : null}
          <GlobalTextComponent
            color="Green.600"
            fontSize={18}
            fontFamily="montserratSemiBold"
            style={brandCard ? {marginLeft: 10} : undefined}
            numberOfLines={1}
            text={title}
          />
        </S.CardDetails>
        {description ? (
          <GlobalTextComponent
            color="Neutral.700"
            fontSize={12}
            fontFamily="montserratRegular"
            numberOfLines={1}
            style={{
              marginTop: 8,
            }}
            text={description}
          />
        ) : null}
      </S.CardInfoContainer>
      {iconName ? (
        <GlobalIcon
          testID="test-icon"
          iconName={iconName}
          color="Green.600"
          size={28}
        />
      ) : null}
    </S.ButtonContainer>
  ),
);
