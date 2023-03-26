import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IlSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components';

const SuccessSignUp = () => {
  return (
    <View style={styles.page}>
      <IlSuccessSignUp />
      <Gap height={30}/>
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6}/>
      <Text style={styles.subtitle}>Now you are able to order</Text>
      <Text style={styles.subtitle}>some foods as a self-reward</Text>
      <Gap height={30}/>
      <View style={styles.buttonContainer}>
        <Button text={'Find Foods'} />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    marginTop: 6,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
