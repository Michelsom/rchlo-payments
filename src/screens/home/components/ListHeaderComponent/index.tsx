import React from 'react';
import {View} from 'react-native';
import {SelectPaymentButton} from '../../../../components/SelectPaymentButton';
import {GlobalTextComponent} from '../../../../global/components/GlobalTextComponent';
import {Card} from '../../../../models/userData';
import {maskValue} from '../../../../utils/masks';

export const ListHeaderComponent = ({
  handleButton,
  responseData,
  cardData,
}: {
  handleButton: (item: Card, type: string) => void;
  responseData: any;
  cardData: any;
}) => (
  <View>
    <GlobalTextComponent
      color="Neutral.900"
      fontSize={24}
      fontFamily="montserratBold"
      style={{width: '100%', textAlign: 'left', marginTop: 32}}
      text={'Transferência Pix'}
    />

    <GlobalTextComponent
      color="Neutral.900"
      fontSize={16}
      fontFamily="montserratMedium"
      style={{width: '100%', textAlign: 'left', marginTop: 24}}
      text="Escolha uma forma de pagamento"
    />
    {responseData?.account.balance &&
    responseData?.account.status === 'active' ? (
      <>
        <GlobalTextComponent
          color="Neutral.900"
          fontSize={16}
          fontFamily="montserratSemiBold"
          style={{width: '100%', textAlign: 'left', marginTop: 32}}
          text="Conta Midway"
        />
        <SelectPaymentButton
          handleButton={() => {
            handleButton(
              {
                cardId: responseData?.account?.accountId,
                name: 'Conta Midway',
                securityCode: '',
                cardNumber: responseData?.account?.accountId,
                holder: responseData?.account?.owner.name,
                expirationDate: '',
                brand: 'Midway',
                favorite: false,
                used: false,
              },
              'account',
            );
          }}
          title="Saldo em conta"
          description={`Disponível: ${maskValue(
            responseData?.account?.balance ?? 0,
          )}`}
          hasRadio={true}
          selected={responseData.account.accountId === cardData?.card.cardId}
        />
      </>
    ) : null}

    {responseData?.account.cards ? (
      <GlobalTextComponent
        color="Neutral.900"
        fontSize={16}
        fontFamily="montserratSemiBold"
        style={{
          width: '100%',
          textAlign: 'left',
          marginTop: 32,
        }}
        text="Cartões de crédito"
      />
    ) : null}
  </View>
);
