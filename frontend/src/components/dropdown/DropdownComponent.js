import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {scale} from 'react-native-size-matters';
import {PLACEHOLDERTEXT, PRIMARY, TEXTBLACK} from '../../constants/colors';
import {windowWidth} from '../../utils/dimensions';

const DropdownComponent = () => {
  const data = [
    {label: 'Jaipur', value: '1'},
    {label: 'Delhi ', value: '2'},
    {label: 'Ahemdabad', value: '3'},
    {label: 'Kerela', value: '4'},
    {label: 'Mumbai', value: '5'},
    {label: 'Pune', value: '6'},
  ];
  const [value, setValue] = useState('1');
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Dropdown
      style={styles.dropdown}
      containerStyle={styles.internalContainer}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      data={data}
      iconColor={PRIMARY}
      maxHeight={300}
      labelField="label"
      valueField="value"
      // placeholder={!isFocus ? '+91' : '...'}
      value={value}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onChange={item => {
        setValue(item.value);
        setIsFocus(false);
      }}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    color: TEXTBLACK,
  },
  internalContainer: {
    width: windowWidth * 0.85,
  },
  icon: {
    marginRight: 0,
  },
  placeholderStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(12),
    color: PLACEHOLDERTEXT,
  },
  selectedTextStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(12),
    color: TEXTBLACK,
  },
});
