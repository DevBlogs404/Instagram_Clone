import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {IUser} from '../../types/models';
import {Weight} from '../../themes/fonts';
import Colors from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';

interface IUserListItemProp {
  user: IUser;
}

const UserListItem = ({user}: IUserListItemProp) => {
  const navigation = useNavigation();

  const goToUserScreen = () => {
    navigation.navigate('UserProfile', {userId: user.id});
  };

  return (
    <Pressable onPress={goToUserScreen} style={styles.root}>
      <Image source={{uri: user.image}} alt="user" style={styles.image} />

      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontWeight: Weight.bold,
    marginBottom: 5,
  },
  username: {
    color: Colors.gray,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default UserListItem;
