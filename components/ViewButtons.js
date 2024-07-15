import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ViewButtons = ({ viewMode, handleSetViewMode }) => {
  //Hope to make this dynamic
  const city = 'Seattle, WA';
  const active = '#A16AE8';
  const disabled = '#bbb';

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>Now playing near {city}</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetViewMode(0)}
        >
          <Foundation
            name='thumbnails'
            size={24}
            color={viewMode === 0 ? active : disabled}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSetViewMode(1)}
        >
          <MaterialCommunityIcons
            name='rectangle-outline'
            size={24}
            color={viewMode === 1 ? active : disabled}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  right: {
    flexDirection: 'row',
  },
  button: {
    width: 40,
  },
  title: {
    marginLeft: 10,
    fontSize: 14,
    color: '#fff',
  },
});

export default ViewButtons;
