import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {IlEmptyOrder} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import { Button, Gap } from '../../atoms';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IlEmptyOrder />
      <Gap height={30} />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Text style={styles.subtitle}>
        {'Seems like you have not\nordered any food yet'}
      </Text>
      <Gap height={30} />
      <View style={styles.buttonWrapper}>
        <Button
          text={'Find Foods'}
          onPress={() => navigation.navigate('MainApp', {screen: 'Home'})}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: 'grey',
    fontFamily: 'Poppins-Light',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  buttonWrapper: {
    width: '100%',
  },
});