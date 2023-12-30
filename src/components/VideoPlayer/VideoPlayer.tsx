import {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface IVideoPlayerProps {
  uri: string;
  paused: boolean;
}

const VideoPlayer = ({uri, paused}: IVideoPlayerProps) => {
  const [isMuted, setIsMuted] = useState(false);

  const handleMuteVideo = () => {
    setIsMuted(prev => !prev);
  };
  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
        muted={isMuted ? true : false}
        paused={paused}
      />
      <Pressable style={styles.muteButton} onPress={handleMuteVideo}>
        <Ionicons
          name={isMuted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color={'white'}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    // height: 300,
    aspectRatio: 1,
  },
  muteButton: {
    backgroundColor: Colors.black,
    padding: 5,
    position: 'absolute',
    right: 10,
    bottom: 10,
    borderRadius: 25,
  },
});

export default VideoPlayer;
