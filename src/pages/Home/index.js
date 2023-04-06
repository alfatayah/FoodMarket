import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  ProfileDummy,
} from '../../assets/Dummy';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const Home = () => {
  return (
    <ScrollView >
     <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           <View style={styles.foodCardContainer}>
             <Gap width={24} />
             <FoodCard image={FoodDummy1} />
             <FoodCard image={FoodDummy2} />
             <FoodCard image={FoodDummy3} />
             <FoodCard image={FoodDummy4} />
           </View>
         </ScrollView>
        </View>

        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
    </View>
   </ScrollView>
    
   
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
