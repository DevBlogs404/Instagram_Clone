import {View, Text, StyleSheet, Image} from 'react-native';
import userData from '../../assets/data/user.json';
import Colors from '../../themes/colors';
import {Size, Weight} from '../../themes/fonts';
import Button from '../../components/Button';

import {useNavigation} from '@react-navigation/native';
import {ProfileNavigationProps} from '../../navigation/types';

const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigationProps>();

  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* pofile image */}
        <Image source={{uri: userData.image}} style={styles.avatar} />

        {/* posts, followers, following  */}
        <View style={styles.userDetailTab}>
          <Text style={styles.detailsText}>98</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.userDetailTab}>
          <Text style={styles.detailsText}>69</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.userDetailTab}>
          <Text style={styles.detailsText}>169</Text>
          <Text>Following</Text>
        </View>
      </View>

      <Text style={styles.userName}>{userData.name}</Text>
      <Text>{userData.bio}</Text>

      <View style={styles.buttonContainer}>
        <Button text="Edit Profile" onPress={navigateToEditProfile} />
        <Button
          text="Share Profile"
          onPress={() => console.log('work on progress')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'yellow',
  },
  userDetailTab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsText: {
    color: Colors.black,
    fontWeight: Weight.heavy,
    fontSize: Size.md,
  },
  userName: {
    color: Colors.black,
    fontWeight: Weight.semiBold,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 5,
  },
});

export default ProfileHeader;
