import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';


//NOTE: props.navigation itu dapet dari inject component dari funtionn router yg di implement dari stack navigation
const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("SignIn")
    }, 2000);

  }, []);

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
