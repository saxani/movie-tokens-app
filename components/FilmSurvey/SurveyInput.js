import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Button from '../Button';

const SurveyInput = ({ q, updateAnswer, cancelSurvey }) => {
  const [text, setText] = useState('');

  const handlePress = () => {
    updateAnswer(text);
  };

  const handleCancel = () => {
    cancelSurvey();
  };

  return (
    <View>
      <Text style={{ marginBottom: 15 }}>{q}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder='Answer here...'
      />
      <View style={styles.buttonWrapper}>
        <Button onPress={handleCancel} text='Cancel' outlined={true} />
        <Button onPress={handlePress} text='Next' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 215,
    height: 40,
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 15,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SurveyInput;
