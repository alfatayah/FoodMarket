import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/header';
import {Gap, TextInput} from '../../components';
import Button from '../../components/atoms/Button';

const SignUp = () => {
  return (
    <View style={styles.page}>
      <Header
        title="Sign Up"
        subtitle={'Register and eat'}
        onBack={() => console.log('etyst')}
      />
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={StyleSheet.photoContainer}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput label={'Fullname'} placeholder={'Type your fullname'} />
        <Gap height={16} />
        <TextInput label={'Email Address'} placeholder={'Type your email'} />
        <Gap height={16} />
        <TextInput label={'Password'} placeholder={'Type your password'} />
        <Gap height={24} />
        <Button text={'Continue'} />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
});
