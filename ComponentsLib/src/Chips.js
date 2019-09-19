import * as React from 'react';
import {
  View
} from 'react-native';

import Colors from "../constants/Colors";
import { Chip } from 'react-native-paper';

const Chips = ({ selected = false, selectedColor = Colors.selectedChipColor, onPress = () => console.log('Pressed'), icon, onClose, title }) => {

  return (
    <View style={{ padding: 5 }}>
      <Chip
        textStyle={{
          color: selected ? Colors.chipTextSelected : Colors.chipText,
          fontSize: 14,
          fontFamily: "sf-ui-display-semibold"
        }}
        style={{
          backgroundColor: selected ? Colors.selectedChipColor : Colors.chipColor,

        }}
        onClose={onClose}
        selected={selected}
        icon={icon}
        selectedColor={selected ? '#fff' : selectedColor}
        onPress={onPress}
        iconColorPrimary={{
          color: '#fff'
        }}
      >
        {title}
      </Chip>

    </View>
  )
};

export default Chips;