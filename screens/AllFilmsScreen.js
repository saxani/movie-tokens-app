import { StyleSheet, Text, View, Modal, Dimensions } from 'react-native';
import { useState, useEffect, useContext } from 'react';

import FilmList from '../components/FilmList';
import FilmSurvey from '../components/FilmSurvey';

import { FilmsContext } from '../context/Films';

const AllFilmsScreen = ({ navigation }) => {
  const { filmDone } = useContext(FilmsContext);
  const [modalVisible, setModalVisible] = useState(false);

  //Hope to make this dynamic
  const city = 'Seattle, WA';

  useEffect(() => {
    if (filmDone) {
      setModalVisible(true);
    }
  }, [filmDone]);

  const handleModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now playing near {city}:</Text>
      <View style={styles.listContainer}>
        <FilmList navigation={navigation} />
      </View>
      <FilmSurvey modalVisible={modalVisible} handleModal={handleModal} />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: 'auto',
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 10,
    fontSize: 14,
    color: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default AllFilmsScreen;
