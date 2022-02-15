import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/headers/Header';
import {
  HEADINGCOLOR,
  PLACEHOLDERTEXT,
  SCREEN,
  SECONDARY,
  TEXTBLACK,
} from '../../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {scale} from 'react-native-size-matters';
import {windowWidth} from '../../utils/dimensions';
import {data} from '../../tempData/tempText';
import Card from '../../components/cards/Card';
const NotificationsScreen = ({route}) => {
  return (
    <View style={styles.screen}>
      <Header back title={route.name} rightComponent={false} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: windowWidth * 0.35,
          marginTop: 10,
        }}>
        <MaterialCommunityIcons
          name="bell-ring-outline"
          size={scale(85)}
          color={SECONDARY}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
            borderRadius: scale(50),
            borderWidth: 2,
            borderColor: SECONDARY,
          }}
        />
      </View>
      <FlatList
        style={{width: windowWidth, flex: 1}}
        contentContainerStyle={{
          width: windowWidth,
          alignItems: 'center',
          paddingBottom: scale(30),
          paddingTop: scale(10),
        }}
        data={data}
        keyExtractor={item => item.Key}
        renderItem={({item}) => (
          <Card style={{marginBottom: scale(20), width: windowWidth * 0.85}}>
            <Text style={styles.text}>{item.time}</Text>
            <Text style={[styles.text, {color: TEXTBLACK}]}>{item.title}</Text>
          </Card>
        )}
      />
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(11),
    color: PLACEHOLDERTEXT,
    textAlign: 'left',
    textAlignVertical: 'center',
    width: '100%',
  },
});
