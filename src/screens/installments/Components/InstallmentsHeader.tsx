import React from 'react';
import {GlobalContainer} from '../../../global/components/GlobalContainer';
import {GlobalIcon} from '../../../global/components/GlobalIcons';
import {GlobalTextComponent} from '../../../global/components/GlobalTextComponent';
import * as S from './styles';
interface InstallmentsHeaderProps {
  onClose: () => void;
}
export const InstallmentsHeader: React.FC<InstallmentsHeaderProps> = ({
  onClose,
}) => {
  return (
    <GlobalContainer direction="column" justify="flex-end" alignItems="center">
      <GlobalContainer
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{width: '100%'}}>
        <GlobalTextComponent
          color="Neutral.800"
          fontSize={16}
          lineHeight={18}
          fontFamily="montserratLight"
          text="Parcelas do pagamento"
        />
        <S.CloseButton onPress={onClose}>
          <GlobalIcon iconName="close" color={'Green.900'} size={28} />
        </S.CloseButton>
      </GlobalContainer>
      <GlobalTextComponent
        color="Neutral.700"
        fontSize={14}
        lineHeight={16}
        fontFamily="montserratLight"
        style={{marginTop: 16}}
        text="O destinatário receberá á vista o valor total da compra e você pagará parcelado"
      />
    </GlobalContainer>
  );
};
