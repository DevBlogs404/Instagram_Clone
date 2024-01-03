import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

export type RootNavigationType = {
  Home: undefined;
  Comments: {postId: string};
};

export type BottomTabNavigationTypes = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notification: undefined;
  MyProfile: undefined;
};

export type HomeSTackNavigationTypes = {
  Feed: undefined;
  UserProfile: {userId: string};
};

export type ProfileNavigationTypes = {
  Profile: undefined;
  EditProfile: undefined;
};

export type FeedNavigationProps = NativeStackNavigationProp<
  HomeSTackNavigationTypes,
  'Feed'
>;

export type ProfileNavigationProps = NativeStackNavigationProp<
  ProfileNavigationTypes,
  'Profile'
>;

export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeSTackNavigationTypes,
  'UserProfile'
>;
export type UserProfileRouteProp = RouteProp<
  HomeSTackNavigationTypes,
  'UserProfile'
>;

export type MyProfileBottomTabNavigationProp = BottomTabNavigationProp<
  BottomTabNavigationTypes,
  'MyProfile'
>;

export type MyProfileBottomTabsRouteProp = RouteProp<
  BottomTabNavigationTypes,
  'MyProfile'
>;
