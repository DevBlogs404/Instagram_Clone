import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PostUploadScreen from '../screens/PostUploadScreen/PostUploadScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';

import {BottomTabNavigationTypes} from './types';

const Tabs = createBottomTabNavigator<BottomTabNavigationTypes>();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{tabBarShowLabel: false, tabBarActiveTintColor: 'black'}}>
      <Tabs.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home-filled" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Seacrh"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Upload"
        component={PostUploadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        component={PostUploadScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="hearto" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyProfile"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
