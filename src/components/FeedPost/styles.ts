import {StyleSheet} from 'react-native';
import Colors from '../../themes/colors';
import {Weight} from '../../themes/fonts';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  post: {},
  image: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    objectFit: 'contain',
    marginRight: 10,
  },
  userName: {
    fontWeight: Weight.bold,
    color: Colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
    // color: Colors.black,
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
});
