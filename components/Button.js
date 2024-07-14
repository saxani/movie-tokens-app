import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: '#603F8B',
    padding: 20,
    width: 100,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Button;
