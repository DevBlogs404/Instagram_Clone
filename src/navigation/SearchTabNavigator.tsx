import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UserSearchScreen from '../screens/UserSearchScreen/UserSearchScreen';
import {SearchTabNavigationTypes} from './types';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import Colors from '../themes/colors';

const Tab = createMaterialTopTabNavigator<SearchTabNavigationTypes>();

const SearchTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: Colors.primary},
      }}>
      <Tab.Screen name="Users" component={UserSearchScreen} />
      <Tab.Screen name="Posts" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
