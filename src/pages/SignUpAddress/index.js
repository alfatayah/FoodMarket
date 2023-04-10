import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Select, TextInput, Header} from '../../components';
import Button from '../../components/atoms/Button';
import { ScrollView } from 'react-native-gesture-handler';

const SignUpAddress = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.page}>
      <Header
        title="Address"
        subtitle={'Make sure it’s valid'}
        onBack={() => console.log('etyst')}
      />
      <View style={styles.container}>
        <TextInput label={'Phone No.'} placeholder={'Type your phone number'} />
        <Gap height={16} />
        <TextInput label={'Address'} placeholder={'Type your address'} />
        <Gap height={16} />
        <TextInput label={'House No.'} placeholder={'Type your house number'} />
        <Gap height={16} />
        <Select label={"City"}/>
        <Gap height={24} />
        <Button text={'Sign Up Now'} onPress={()=> navigation.replace("SuccessSignUp")}/>
      </View>
    </View>
    </ScrollView>
  );
};

export default SignUpAddress;

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
});
