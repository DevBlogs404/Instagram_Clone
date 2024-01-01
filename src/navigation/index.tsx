import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import PostUploadScreen from '../screens/PostUploadScreen/PostUploadScreen';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import logo from '../assets/images/logo.png';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator();

const CustomNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homefeed">
        <Stack.Screen
          name="homefeed"
          component={HomeScreen}
          options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}
        />
        <Stack.Screen name="Comments" component={CommentsScreen} />
        <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{title: 'Profile'}}
        />
        <Stack.Screen name="PostUpload" component={PostUploadScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderTitle = () => {
  return <Image source={logo} style={{width: 150, height: 40}} />;
};

export default CustomNavigation;
