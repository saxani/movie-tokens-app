import { useContext, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { FilmsContext } from '../context/Films';
import MoviePoster from './MoviePoster';

const FilmSlider = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const { posterURL, films } = useContext(FilmsContext);

  const itemWidth = width * 0.71;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    textWrapper: {
      alignItems: 'flex-start',
      width: '100%',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    rating: {
      fontSize: 16,
      marginBottom: 10,
    },
    overview: {
      fontSize: 14,
    },
  });

  const SwipeCard = ({ item }) => {
    const rating = Math.round(item.vote_average * 10) / 10;

    const handlePress = () => {
      navigation.navigate('FilmDetails', {
        item: item,
      });
    };

    return (
      <TouchableOpacity
        style={{ width: itemWidth }}
        activeOpacity={0.8}
        onPress={handlePress}
      >
        <View
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 15,
            padding: 20,
            alignItems: 'center',
            borderRadius: 5,
          }}
        >
          <MoviePoster
            posterURL={posterURL}
            path={item.poster_path}
            width={'100%'}
            height={(itemWidth - 80) * 1.5}
            marginBottom={5}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.rating}>{rating}/10</Text>
            <Text style={styles.overview} numberOfLines={3}>
              {item.overview}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (!films || !itemWidth) {
    return (
      <View>
        <Text>Getting films...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ paddingLeft: 55 }}
        data={films}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={itemWidth}
        decelerationRate={0}
        bounces={false}
        renderItem={({ item }) => (
          <SwipeCard
            item={item}
            posterURL={posterURL}
            navigation={navigation}
            viewType={1}
          />
        )}
      />
    </View>
  );
};

export default FilmSlider;
