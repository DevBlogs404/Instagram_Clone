import {View, Text, StyleSheet, Image} from 'react-native';
import userData from '../../assets/data/user.json';
import Colors from '../../themes/colors';
import {Size, Weight} from '../../themes/fonts';
import Button from '../../components/Button';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';

import {useNavigation, useRoute} from '@react-navigation/native';

import {
  MyProfileBottomTabNavigationProp,
  UserProfileNavigationProp,
  MyProfileBottomTabsRouteProp,
  UserProfileRouteProp,
} from '../../navigation/types';

const ProfileScreen = () => {
  const route = useRoute<MyProfileBottomTabsRouteProp | UserProfileRouteProp>();
  const navigation = useNavigation<
    MyProfileBottomTabNavigationProp | UserProfileNavigationProp
  >();

  const userId = route.params?.userId;

  // navigation.setOptions({title: userId});

  return (
    <FeedGridView data={userData.posts} ListHeaderComponent={ProfileHeader} />
  );
};

export default ProfileScreen;
