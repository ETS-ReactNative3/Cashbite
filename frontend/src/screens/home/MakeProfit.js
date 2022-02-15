import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Divider from '../../components/divider/Divider';
import Headings from '../../components/headings/Headings';
import SearchPlate from '../../components/searchBarPlate/SearchPlate';
import {
  HEADINGCOLOR,
  PLACEHOLDERTEXT,
  SCREEN,
  LINEARGRADIENT,
  BLACK,
} from '../../constants/colors';

import Header from '../../components/headers/Header';
import ButtonMain from '../../components/buttons/ButtonMain';
import LinearGradient from 'react-native-linear-gradient';

const MakeProfit = ({route}) => {
  const [website, setWebsite] = useState('');
  const [sub1, setSub1] = useState('');
  const [sub2, setSub2] = useState('');
  return (
    <View style={styles.mainContainer}>
      <Header
        rightComponent={false}
        title={route.name}
        back
        style={{marginBottom: scale(20)}}
      />
      <View style={styles.websiteBox}>
        <Text style={styles.websiteBoxText}>Add Your Website</Text>
        <SearchPlate>
          <TextInput
            style={styles.input}
            placeholder="www.abcd.com"
            placeholderTextColor={PLACEHOLDERTEXT}
            value={website}
            onChangeText={website => setWebsite(website)}
          />
        </SearchPlate>
      </View>
      <Divider style={{marginBottom: 0}} />
      <Headings title="Add Sub IDs (Optional)" styleC={{marginTop: 20}} />
      <View style={styles.websiteBox}>
        <Text style={styles.websiteBoxText}>Sub Id 1</Text>
        <SearchPlate>
          <TextInput
            style={styles.input}
            placeholder="www.abcd.com"
            placeholderTextColor={PLACEHOLDERTEXT}
            value={sub1}
            onChangeText={sub1 => setSub1(sub1)}
          />
        </SearchPlate>
      </View>
      <View style={{...styles.websiteBox, marginTop: scale(20)}}>
        <Text style={styles.websiteBoxText}>Sub Id 2</Text>
        <SearchPlate>
          <TextInput
            style={styles.input}
            placeholder="www.abcd.com"
            placeholderTextColor={PLACEHOLDERTEXT}
            value={sub2}
            onChangeText={sub2 => setSub2(sub2)}
          />
        </SearchPlate>
      </View>

      <ButtonMain style={styles.button}>
        <LinearGradient
          colors={LINEARGRADIENT}
          style={styles.buttontextContainer}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}>
          <Text style={styles.buttonText}>Apply</Text>
        </LinearGradient>
      </ButtonMain>
    </View>
  );
};

export default MakeProfit;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: scale(16),
    backgroundColor: SCREEN,
  },
  websiteBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  websiteBoxText: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    lineHeight: 18,
    color: HEADINGCOLOR,
    marginLeft: scale(20),
    marginBottom: scale(10),
    alignSelf: 'flex-start',
  },
  input: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: BLACK,
    fontFamily: 'Poppins-Regular',
    fontSize: scale(11),
  },
  button: {
    position: 'absolute',
    bottom: scale(35),
  },
  buttontextContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: scale(15),
    fontFamily: 'Poppins-Medium',
    color: SCREEN,
    textAlign: 'left',
  },
});
