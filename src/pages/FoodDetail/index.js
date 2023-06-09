import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FoodDummy1, FoodDummy6, IcBackWhite} from '../../assets';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Counter, Rating} from '../../components';
import {Button} from '../../components';

const FoodDetail = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <ImageBackground style={styles.cover} source={FoodDummy6}>
          <TouchableOpacity style={styles.back}>
            <IcBackWhite />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.content}>
          <View style={styles.mainContent}>
            <View style={styles.productContainer}>
              <View>
                <Text style={styles.title}>Food Name</Text>
                <Rating />
              </View>
              <Counter />
            </View>
            <Text style={styles.desc}>
              Makanan khas Bandung yang cukup sering dipesan oleh anak muda
              dengan pola makan yang cukup tinggi dengan mengutamakan diet yang
              sehat dan teratur.
            </Text>
            <Text style={styles.label}>Ingredients: </Text>
            <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.priceContainer}>
              <Text style={styles.labelTotal}>Total Price :</Text>
              <Text style={styles.priceTotal}>Idr 129.000</Text>
            </View>
            <View style={styles.button}>
              <Button text="Order Now" onPress={()=> navigation.navigate('OrderSummary')} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 22,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Popins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  back: {
    // backgroundColor: 'black',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent:{
   flex: 1
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginTop: 16,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  button:{
    width: 163,
  },
  priceContainer:{
    flex: 1,
  },
  labelTotal:{
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  priceTotal:{
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
     
  }
});
