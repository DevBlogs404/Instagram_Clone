import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Weight} from '../../themes/fonts';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
  includeDetails: boolean;
}

const Comment = ({comment, includeDetails = false}: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLikeButton = () => {
    setIsLiked(prev => !prev);
  };

  return (
    <View style={styles.comment}>
      {includeDetails && (
        <Image source={{uri: comment.user.image}} style={styles.avatar} />
      )}
      <View style={styles.middleCol}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username}</Text>{' '}
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.commentFooter}>
            <Text style={styles.footerText}>2d</Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleLikeButton} hitSlop={4}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          size={16}
          style={styles.icon}
          color={isLiked ? 'red' : Colors.black}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: Colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: Weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: Colors.black,
    flex: 1,
    lineHeight: 18,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
    objectFit: 'contain',
    marginRight: 5,
    backgroundColor: 'blue',
  },
  middleCol: {
    flex: 1,
  },
  commentFooter: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
  },
});

export default Comment;
