import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  Camera,
  CameraPictureOptions,
  CameraRecordingOptions,
  CameraType,
  FlashMode,
  VideoQuality,
} from 'expo-camera';
import {useEffect, useRef, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../themes/colors';

const flashModesArray = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModeToIcons = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

const PostUploadScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const camera = useRef<Camera>(null);

  useEffect(() => {
    // asking for camera nd mic persmission (on android only because on ios we don't need it)

    const getPermission = async () => {
      const getCameraPermission = await Camera.requestCameraPermissionsAsync();
      const getMicrophonePermission =
        await Camera.requestMicrophonePermissionsAsync();

      setHasPermission(
        getCameraPermission.status === 'granted' &&
          getMicrophonePermission.status === 'granted',
      );
    };

    getPermission();
  }, []);

  const toggleCameraType = () => {
    setCameraType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const toggleCameraFlash = () => {
    let currentIndex = flashModesArray.indexOf(flash);
    let nextIndex =
      currentIndex === flashModesArray.length - 1 ? 0 : currentIndex + 1;

    setFlash(flashModesArray[nextIndex]);
  };

  const takePicture = async () => {
    if (!isCameraReady || !camera.current || isRecording) return;

    const options: CameraPictureOptions = {
      quality: 0.7,
      base64: false,
      skipProcessing: true,
    };

    const result = await camera.current.takePictureAsync(options);
  };

  const startRecording = async () => {
    console.log('start');
    if (!isCameraReady || !camera.current || isRecording) return;

    const options: CameraRecordingOptions = {
      quality: VideoQuality['720p'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };

    setIsRecording(true);
    try {
      const result = await camera.current.recordAsync(options);
    } catch (error) {
      console.log(error);
    }
    setIsRecording(false);
  };
  const stopRecording = () => {
    if (isRecording) {
      camera.current?.stopRecording();
      setIsRecording(false);
      console.log('stop');
    }
  };

  if (hasPermission === null) {
    return <Text>Loading...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No camera permission</Text>;
  }

  return (
    <View style={styles.page}>
      <Camera
        ref={camera}
        style={styles.camera}
        type={cameraType}
        ratio="4:3"
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <View style={[styles.buttonContainer, {top: 25}]}>
        <MaterialIcons name="close" size={30} color={Colors.white} />
        <Pressable onPress={toggleCameraFlash}>
          <MaterialIcons
            name={flashModeToIcons[flash]}
            size={30}
            color={Colors.white}
          />
        </Pressable>
        <MaterialIcons name="settings" size={30} color={Colors.white} />
      </View>
      <View style={[styles.buttonContainer, {bottom: 25}]}>
        <MaterialIcons name="photo-library" size={30} color={Colors.white} />
        {isCameraReady && (
          <Pressable
            onPress={takePicture}
            onLongPress={startRecording}
            onPressOut={stopRecording}>
            <View
              style={[
                styles.circle,
                {backgroundColor: isRecording ? Colors.accent : Colors.white},
              ]}
            />
          </Pressable>
        )}
        <Pressable onPress={toggleCameraType}>
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color={Colors.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
  },
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
});

export default PostUploadScreen;
