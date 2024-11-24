import React from 'react';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as S from './styles';

const DURATION = 2000;
const cards = Array(2).fill(null);
export const GlobalEffects = () => {
  return (
    <S.Column>
      <S.TitleName
        width={Dimensions.get('screen').width}
        duration={DURATION}
        visible={false}
        LinearGradient={LinearGradient}
      />
      <S.NameMerchant
        width={Dimensions.get('screen').width}
        duration={DURATION}
        visible={false}
        LinearGradient={LinearGradient}
      />
      <S.TitleName
        width={Dimensions.get('screen').width}
        duration={DURATION}
        visible={false}
        LinearGradient={LinearGradient}
      />
      {cards.map((_, index) => (
        <S.NameMerchant
          key={index}
          width={Dimensions.get('screen').width}
          duration={DURATION}
          visible={false}
          LinearGradient={LinearGradient}
        />
      ))}
    </S.Column>
  );
};
