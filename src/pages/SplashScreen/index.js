import React from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFC700',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Logo />
      <View
        style={{
          height: 38,
        }}>
        <Text style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium' }}>FoodMarket</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
