import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconBack} from '../../../assets';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'back') {
      return <IconBack />;
    }
    <IconBack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
