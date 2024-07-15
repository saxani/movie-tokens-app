import { StyleSheet, View, Dimensions } from 'react-native';
import { useState, useEffect, useContext } from 'react';

import FilmList from '../components/FilmList';
import FilmSlider from '../components/FilmSlider';
import FilmSurvey from '../components/FilmSurvey';
import ViewButtons from '../components/ViewButtons';

import { FilmsContext } from '../context/Films';

const AllFilmsScreen = ({ navigation }) => {
  const { filmDone, updateToSee } = useContext(FilmsContext);
  const [viewMode, setViewMode] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (filmDone) {
      setModalVisible(true);
    }
  }, [filmDone]);

  const handleModal = () => {
    setModalVisible(false);
    updateToSee();
  };

  const handleSetViewMode = (num) => {
    setViewMode(num);
  };

  return (
    <View style={styles.container}>
      <ViewButtons handleSetViewMode={handleSetViewMode} viewMode={viewMode} />
      {viewMode === 0 && (
        <View style={styles.listContainer}>
          <FilmList navigation={navigation} />
        </View>
      )}

      {viewMode === 1 && <FilmSlider navigation={navigation} />}
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
    flex: 2,
    marginHorizontal: 'auto',
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
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
