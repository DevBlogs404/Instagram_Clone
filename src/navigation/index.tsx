import {NavigationContainer, LinkingOptions} from '@react-navigation/native';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import PostUploadScreen from '../screens/PostUploadScreen/PostUploadScreen';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';

import {RootNavigationType} from './types';

const Stack = createNativeStackNavigator<RootNavigationType>();

const linking: LinkingOptions<RootNavigationType> = {
  prefixes: ['simpleapp://', 'https://simpleapp.com'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments',
      Home: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feed',
            screens: {
              UserProfile: 'user/:userId',
            },
          },
        },
      },
    },
  },
};

const CustomNavigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Comments" component={CommentsScreen} options={{}} />
        {/* <Stack.Screen name="PostUpload" component={PostUploadScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CustomNavigation;
