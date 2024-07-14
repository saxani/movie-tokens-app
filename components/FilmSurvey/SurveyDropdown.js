import { useState } from 'react';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const SurveyDropdown = ({ updateAnswer }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Illustration', value: 'illustration' },
    { label: 'Anime', value: 'anime' },
    { label: 'Cyberpunk', value: 'cyberpunk' },
    { label: 'Pixel Art', value: 'pixel art' },
    { label: 'Comics', value: 'comics' },
    { label: 'Retro', value: 'retro' },
  ]);

  const handlePress = () => {
    updateAnswer(value);
  };

  return (
    <View>
      <Text style={{ marginBottom: 15 }}>
        What style reminds you of the film? Or just how would you like to see it
        depicted?
      </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={handlePress}
      />
    </View>
  );
};

export default SurveyDropdown;
