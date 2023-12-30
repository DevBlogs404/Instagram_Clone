import {View, Text, FlatList, SafeAreaView} from 'react-native';
import commentsData from '../../assets/data/comments.json';
import Comment from '../../components/Comment';
import Input from './Input';

const CommentsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={commentsData}
        renderItem={({item}) => (
          <Comment comment={item} includeDetails={true} />
        )}
        style={{padding: 10}}
      />
      <Input />
    </View>
  );
};

export default CommentsScreen;
