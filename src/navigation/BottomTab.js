import {Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../utils/Colors';
import {FontSize} from '../utils/FontSize';
import fonts from '../assets/fonts';
import Dashboard from '../screens/Dashboard/Dashboard';
import Media from '../screens/Media/Media';
import Watch from '../screens/Watch/Watch';
import More from '../screens/More/More';
import {hp, wp} from '../utils/Dimensions';
import MovieStack from './MovieStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Watch"
        screenOptions={{
          unmountOnBlur: true,
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarActiveTintColor: Colors.white,
          tabBarInactiveTintColor: '#AFAFB4',
          tabBarStyle: [
            {
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              borderTopWidth: 0.05,
              elevation: 4,
              backgroundColor: Colors.mehroom,
              shadowRadius: 20,
              shadowColor: '#000000',
              shadowOpacity: 0.2,
              position: 'absolute',
              borderTopColor: 'black',
              height: 80,
            },
          ],
          tabBarLabelStyle: {
            fontSize: FontSize.vtiny,
            fontFamily: fonts.regular,
            color: Colors.white,
            bottom: 10,
          },
        }}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Image
                source={require('../assets/images/dashboardInactive.png')}
                style={focused ? styles.activeIcon : styles.InactiveIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Watch"
          component={MovieStack}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Image
                source={require('../assets/images/watchIcon.png')}
                style={focused ? styles.activeIcon : styles.InactiveIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Media Library"
          component={Media}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Image
                source={require('../assets/images/mediaInactive.png')}
                style={focused ? styles.activeIcon : styles.InactiveIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Image
                source={require('../assets/images/moreIcon.png')}
                style={[
                  focused ? styles.activeIcon : styles.InactiveIcon,
                  {width: 35, height: 50},
                ]}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = {
  activeIcon: {
    width: wp(7),
    height: hp(3),
    resizeMode: 'contain',
    tintColor: Colors.white,
    alignSelf: 'center',
  },
  InactiveIcon: {
    width: wp(7),
    height: hp(3),
    resizeMode: 'contain',
    tintColor: Colors.drakGrey,
    alignSelf: 'center',
  },
};
export default BottomTab;
