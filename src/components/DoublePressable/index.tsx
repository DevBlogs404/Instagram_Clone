import {ReactNode} from 'react';
import {Pressable, Text} from 'react-native';

interface toggleLikeButtonProp {
  toggleLikeButton: () => void;
  children: ReactNode;
}

const DoublePressable = ({
  toggleLikeButton,
  children,
}: toggleLikeButtonProp) => {
  let lastTap = 0;
  const handleDoubleTap = () => {
    let now = Date.now();

    if (now - lastTap < 300) {
      toggleLikeButton();
    }

    lastTap = now;
  };

  return <Pressable onPress={handleDoubleTap}>{children}</Pressable>;
};

export default DoublePressable;
