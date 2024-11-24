import React from 'react';
import {GlobalIconButton} from '../../../global/components/GlobaIconButton';
import {GlobalContainer} from '../../../global/components/GlobalContainer';
import {GlobalTextComponent} from '../../../global/components/GlobalTextComponent';
interface InstallmentsHeaderProps {
  onClose: () => void;
}
export const InstallmentsHeader: React.FC<InstallmentsHeaderProps> = ({
  onClose,
}) => {
  return (
    <GlobalContainer direction="column" justify="center" alignItems="center">
      <GlobalContainer
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{width: '100%'}}>
        <GlobalTextComponent
          color="Neutral.900"
          fontSize={20}
          fontFamily="montserratBold"
          text="Parcelas do pagamento"
        />
        <GlobalIconButton
          testID="close-button"
          iconName={'close'}
          action={onClose}
          iconColor={'Green.900'}
          iconSize={28}
        />
      </GlobalContainer>
      <GlobalTextComponent
        color="Neutral.700"
        fontSize={14}
        lineHeight={16}
        fontFamily="montserratLight"
        style={{marginVertical: 16, width: '100%'}}
        text="O destinatário receberá á vista o valor total da compra e você pagará parcelado"
      />
    </GlobalContainer>
  );
};
