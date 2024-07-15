import { useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';

import SurveyInput from './SurveyInput';
import SurveyDropdown from './SurveyDropdown';
import Button from '../Button';

import { FilmsContext } from '../../context/Films';

const FilmSurvey = ({ modalVisible, handleModal }) => {
  const { selectedFilm, serverURL, posterURL, updateSeenFilms } =
    useContext(FilmsContext);
  const [question, setQuestion] = useState(1);
  const [answers, setAnswers] = useState([]);

  const updateAnswer = (value) => {
    setAnswers((oldArray) => [...oldArray, value]);
    setQuestion(question + 1);
  };

  const cancelSurvey = () => {
    handleModal();
  };

  const handleSubmit = () => {
    handleModal();

    fetch(`${serverURL}/survey-results`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        id: selectedFilm.filmID,
        answers: answers,
        posterURL: posterURL + selectedFilm.poster,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.token && updateSeenFilms(data.token);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Modal animationType='slide' transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {question === 1 && (
            <>
              <Text style={{ marginBottom: 10 }}>
                Want your Movie Token? Answer these questions!
              </Text>
              <SurveyInput
                q={`How was ${selectedFilm.title}? Answer with one adjective.`}
                updateAnswer={updateAnswer}
                cancelSurvey={cancelSurvey}
              />
            </>
          )}
          {question === 2 && (
            <SurveyInput
              q={`Use one word to describe the aesthetics:`}
              updateAnswer={updateAnswer}
              cancelSurvey={cancelSurvey}
            />
          )}
          {question === 3 && <SurveyDropdown updateAnswer={updateAnswer} />}
          {question === 4 && (
            <View>
              <Text style={{ marginBottom: 15 }}>
                Thank you! Your new Movie Token will be available in your films
                shortly.{' '}
              </Text>
              <Button onPress={handleSubmit} text='Close' />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default FilmSurvey;

const styles = StyleSheet.create({
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
