import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text, outlined }) => (
  <TouchableOpacity
    style={[styles.button, outlined ? styles.outlined : '']}
    onPress={onPress}
  >
    <Text style={[styles.text, outlined ? styles.textOutlined : '']}>
      {text}
    </Text>
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
  outlined: {
    borderColor: '#603F8B',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  textOutlined: {
    color: '#603F8B',
  },
});

export default Button;
