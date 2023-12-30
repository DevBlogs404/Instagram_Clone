import {useRef, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  useWindowDimensions,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import DoublePressable from '../DoublePressable';

interface ICarousel {
  images: string[];
  toggleLikeButton: () => void;
}

const Carousel = ({images, toggleLikeButton}: ICarousel) => {
  const {width} = useWindowDimensions();

  const [imageIndex, setImageIndex] = useState(0);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
      }
      setImageIndex(viewableItems[0].index || 0);
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable toggleLikeButton={toggleLikeButton}>
            <Image
              source={{uri: item}}
              alt="image"
              style={{width, height: 300}}
            />
          </DoublePressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          position: 'absolute',
          justifyContent: 'center',
          bottom: 0,
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              aspectRatio: 1,
              borderRadius: 4,
              backgroundColor:
                imageIndex === index ? Colors.primary : Colors.white,
              margin: 2,
              marginHorizontal: 3,
            }}></View>
        ))}
      </View>
    </View>
  );
};

export default Carousel;
