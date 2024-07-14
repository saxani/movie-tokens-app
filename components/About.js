import { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { FilmsContext } from '../context/Films';

const Starring = ({ item }) => {
  const { posterURL } = useContext(FilmsContext);
  const profileURL = posterURL.replace('w300', 'w45');
  let uri = null;

  if (item.profile_path) {
    uri = profileURL + item.profile_path;
  }

  return (
    <View style={styles.actor}>
      {uri && (
        <Image
          resizeMode={'contain'}
          style={{
            width: 45,
            height: 68,
            marginRight: 5,
            marginBottom: 5,
            marginTop: 5,
          }}
          source={{
            uri: uri,
          }}
        />
      )}
      <Text style={{ color: '#fff' }}>{item.name}</Text>
    </View>
  );
};

const About = ({ movieDetails }) => {
  let genres = '';

  movieDetails.genres &&
    movieDetails.genres.forEach((genre, idx) => {
      if (idx < movieDetails.genres.length - 1) {
        genres += `${genre.name}, `;
      } else {
        genres += genre.name;
      }
    });

  const Header = (
    <View>
      <Text style={styles.text}>"{movieDetails.tagline}"</Text>

      <Text style={styles.text}>{movieDetails.overview}</Text>
      <Text style={styles.text}>{genres}</Text>

      <Text style={{ color: '#fff' }}>Starring:</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        ListHeaderComponent={Header}
        style={{ marginBottom: 200 }}
        data={movieDetails.starring}
        renderItem={({ item }) => <Starring item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  actor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    marginBottom: 15,
  },
});

export default About;
