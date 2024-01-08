import {FlatList} from 'react-native';
import UsersData from '../../assets/data/users.json';
import UserListItem from '../../components/UserListItem';

const UserSearchScreen = () => {
  return (
    <FlatList
      data={UsersData}
      renderItem={({item}) => <UserListItem user={item} />}
    />
  );
};

export default UserSearchScreen;
