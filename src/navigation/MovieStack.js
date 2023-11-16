import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Watch from '../screens/Watch/Watch';
import MovieDetailScreen from '../screens/Media/MovieDetail';
import VideoPlayerScreen from '../screens/VideoPlayerScreen/VideoPlayerScreen';
import GetTicketScreen from '../screens/GetTicketScreen/GetTicketScreen';
import SelectSeat from '../screens/SelectSeat/SelectSeat';

const Stack = createNativeStackNavigator();

const MovieStack = () => {
  return (
    <Stack.Navigator initialRouteName="Watch">
      <Stack.Screen
        name="WatchScreen"
        component={Watch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VideoPlayerScreen"
        component={VideoPlayerScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetTicketScreen"
        component={GetTicketScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectSeat"
        component={SelectSeat}
        options={{
          headerShown: false,
          tabBarVisible: false, // Hide the bottom tab bar for this screen
        }}
      />
    </Stack.Navigator>
  );
};

export default MovieStack;
