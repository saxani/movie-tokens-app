import { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

import { FilmsContext } from '../context/Films';

const windowWidth = Dimensions.get('window').width;
const imageWidth = windowWidth * 0.45;
const imageHeight = imageWidth * 1.5;

const SeenFilm = ({ item, serverURL }) => {
  const uri = serverURL + '/images/' + item;
  return (
    <Image
      resizeMode={'contain'}
      style={{ width: imageWidth, height: imageHeight, margin: 7 }}
      source={{
        uri: uri,
      }}
    />
  );
};

const MyFilmsScreen = () => {
  const { tokens, serverURL } = useContext(FilmsContext);
  console.log('Current tokens: ');
  console.log(tokens);

  return (
    <View style={styles.container}>
      <Text>My Tokens</Text>
      <FlatList
        numColumns={2}
        data={tokens}
        renderItem={({ item }) => (
          <SeenFilm item={item} serverURL={serverURL} />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyFilmsScreen;
