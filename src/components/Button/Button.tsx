import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Weight} from '../../themes/fonts';

interface IButtonProps {
  text?: string;
  onPress?: () => void;
}

const Button = ({text = '', onPress = () => {}}: IButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.black,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginTop: 5,
  },
  text: {
    color: Colors.black,
    fontWeight: Weight.semiBold,
  },
});

export default Button;
