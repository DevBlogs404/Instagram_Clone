import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import dummyImage from '../../assets/images/dummy.png';
import {Size, Weight} from '../../themes/fonts';
import Colors from '../../themes/colors';
import {useEffect, useState} from 'react';

const Input = () => {
  const [newComment, setNewComment] = useState<string>('');
  const onPost = () => {
    console.log(newComment);

    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image source={dummyImage} style={styles.avatar} />
      <TextInput
        placeholder="Write your comment..."
        style={styles.input}
        value={newComment}
        onChangeText={setNewComment}
        multiline
      />
      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  input: {
    flex: 1,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 5,
    paddingRight: 50,
  },
  button: {
    position: 'absolute',
    color: Colors.primary,
    right: 15,
    bottom: 15,
    fontWeight: Weight.heavy,
    fontSize: Size.sm,
  },
});

export default Input;
