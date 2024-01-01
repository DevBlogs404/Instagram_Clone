import {Image, View} from 'react-native';
import {IPost} from '../../types/models';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../themes/colors';

const FeedGridItem = ({post}: {post: IPost}) => {
  return (
    <View
      style={{
        flex: 1,
        aspectRatio: 1,
        maxWidth: '33.33%',
        padding: 1,
      }}>
      <Image
        source={{uri: post.image || post.images[0]}}
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
        }}
      />
      {post.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={Colors.white}
          style={{position: 'absolute', top: 5, right: 5}}
        />
      )}
    </View>
  );
};

export default FeedGridItem;
