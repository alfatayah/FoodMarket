import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import ItemListFood from '../ItemListFood';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy6 } from '../../../assets';
import Rating from '../Rating';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const NewTaste = () => {
  const navigation = useNavigation();
  return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood type="product" name='Soup Bumil' price="380.000" rating={3} image={FoodDummy1} onPress={()=> navigation.navigate('FoodDetail')}/>
        <ItemListFood type="product" name='Soup Bumil' price="380.000" rating={3} image={FoodDummy2} onPress={()=> navigation.navigate('FoodDetail')}/>
        <ItemListFood type="product" name='Soup Bumil' price="380.000" rating={3} image={FoodDummy3} onPress={()=> navigation.navigate('FoodDetail')}/>
        <ItemListFood type="product" name='Soup Bumil' price="380.000" rating={3} image={FoodDummy4} onPress={()=> navigation.navigate('FoodDetail')}/>
      </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood type="product" name='Soup Bumil' price="380.000" rating={3} image={FoodDummy4} onPress={()=> navigation.navigate('FoodDetail')} />
      <ItemListFood type="product" name='Soup Bumil' price="380.000" rating={3} image={FoodDummy3} onPress={()=> navigation.navigate('FoodDetail')} />
      <ItemListFood type="product" name='Soup Bumil' price="380.000" rating={3} image={FoodDummy2} onPress={()=> navigation.navigate('FoodDetail')} />
      <ItemListFood type="product" name='Soup Bumil' price="380.000" rating={3} image={FoodDummy1} onPress={()=> navigation.navigate('FoodDetail')} />
    </View>
  );
};

const Recomended = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood type="product" name='Soup Bumil' price="380.000" rating={3} image={FoodDummy3} onPress={()=> navigation.navigate('FoodDetail')} />
      <ItemListFood type="product" name='Soup Bumil' price="380.000" rating={3} image={FoodDummy4} onPress={()=> navigation.navigate('FoodDetail')} />
      <ItemListFood type="product" name='Soup Bumil' price="380.000" rating={3} image={FoodDummy1} onPress={()=> navigation.navigate('FoodDetail')} />
      <ItemListFood type="product" name='Soup Bumil' price="380.000" rating={3} image={FoodDummy2} onPress={()=> navigation.navigate('FoodDetail')} />
    </View>
  );
};

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '0.2%',
    }}
    style={{backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recomended,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white', height: 600}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
