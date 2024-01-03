import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import dummyImage from '../../assets/images/dummy.png';
import Colors from '../../themes/colors';
import {Weight} from '../../themes/fonts';
import Comment from '../Comment';

import {IPost} from '../../types/models';

import styles from './styles';
import {useState} from 'react';

import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';

import {useNavigation} from '@react-navigation/native';
import {FeedNavigationProps} from '../../navigation/types';

interface IFeedProps {
  post: IPost;
  isVisible: boolean;
}

// https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg

const FeedPost = ({post, isVisible}: IFeedProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const navigation = useNavigation<FeedNavigationProps>();

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(prev => !prev);
  };

  const toggleLikeButton = () => {
    setIsLiked(prev => !prev);
  };

  let content = null;

  if (post.image) {
    content = (
      <DoublePressable toggleLikeButton={toggleLikeButton}>
        <Image source={{uri: post.image}} style={styles.image} />
      </DoublePressable>
    );
  } else if (post?.images) {
    content = (
      <Carousel images={post.images} toggleLikeButton={toggleLikeButton} />
    );
  } else if (post.video) {
    content = (
      <DoublePressable toggleLikeButton={toggleLikeButton}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }

  const navigateToUser = () => {
    navigation.navigate('UserProfile', {userId: post.user.id});
    // navigation.navigate('UserProfile', {user: post.user.id});
  };

  const navigateToComments = () => {
    navigation.navigate('Comments', {postId: post.id});
    // navigation.navigate('UserProfile', {user: post.user.id});
  };

  return (
    <View style={styles.post}>
      {/* post header */}
      <View style={styles.header}>
        <Image source={dummyImage} style={styles.avatar} />
        {/* source={post.user.image}  */}
        <Text style={styles.userName} onPress={navigateToUser}>
          {post.user.username}
        </Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* post content */}
      {/* source={post.image}  */}

      {content}

      {/* post footer */}

      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLikeButton}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? Colors.accent : Colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={Colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={Colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={Colors.black}
          />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          liked by <Text style={styles.bold}>randomuser</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes}</Text> others
        </Text>

        {/* description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text> Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Corporis facilis fugit
          voluptatum accusantium minus iste, eos error? Aperiam quasi cum sequi
          omnis esse, adipisci.
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        {/* comments */}
        <Text onPress={navigateToComments}>
          View all {post.nofComments} comments
        </Text>
        {post.comments?.map(comment => {
          return (
            <Comment
              comment={comment}
              key={comment.id}
              includeDetails={false}
            />
          );
        })}
        {/* posted date */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
