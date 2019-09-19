import React from 'react';
import { Feather } from '@expo/vector-icons';

class TabBarIcon extends React.Component {

  render() {
    const { focused, name, tintColor, size = 17 } = this.props
    return (
      <Feather
        name={name}
        size={size}
        style={{ marginBottom: 0 }}
        color={focused ? tintColor : "#222222"}
      />
    );
  }
}

export default TabBarIcon;