import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Header from '../../components/headers/Header';
import Headings from '../../components/headings/Headings';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import LinearGradient from 'react-native-linear-gradient';
import {
  DOT,
  DOTINACTIVE,
  HEADINGCOLOR,
  INPUTTEXT,
  LINEARGRADIENT,
  PLACEHOLDERTEXT,
  PRIMARY,
  SCREEN,
  SEARCHBAR,
  SEARCHION,
  SECONDARY,
} from '../../constants/colors';
import IconCard from '../../components/cards/IconCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import {ALLSTORE} from '../../constants/routeNames';
import {Checkbox} from 'react-native-paper';
import ButtonMain from '../../components/buttons/ButtonMain';
import Divider from '../../components/divider/Divider';

const FilterScreen = ({navigation, route}) => {
  const [checkedFashion, setCheckedFashion] = useState(false);
  const [checkedElec, setCheckedElec] = useState(false);
  const [checkedHealth, setCheckedHealth] = useState(false);
  const [checkedFood, setCheckedFood] = useState(false);
  const clearAll = () => {
    setCheckedElec(false);
    setCheckedFashion(false);
    setCheckedFood(false);
    setCheckedHealth(false);
  };
  return (
    <View style={styles.screen}>
      <Header
        rightComponent={false}
        title={route.name}
        back
        style={{marginBottom: scale(20)}}
      />
      <View style={styles.mainContainer}>
        <Headings title="Categories" />
        {/* horizontal scroll for icons*/}
        <ScrollView
          horizontal
          contentContainerStyle={styles.floatingCategoryContainer}
          style={{
            width: windowWidth,
            height: windowWidth * 0.35,
            backgroundColor: SCREEN,
          }}
          showsHorizontalScrollIndicator={false}>
          <IconCard
            title="All Stores"
            icon={<FontAwesome5 name="store" size={20} color={SECONDARY} />}
            goToScreen={ALLSTORE}
          />
          <IconCard
            title="Beauty & Health"
            icon={
              <MaterialCommunityIcons
                name="bottle-tonic-outline"
                size={20}
                color={SECONDARY}
              />
            }
          />
          <IconCard
            title="Travel"
            icon={<FontAwesome name="plane" size={20} color={SECONDARY} />}
          />
          <IconCard
            title="Food & Dining"
            icon={
              <Ionicons name="fast-food-outline" size={20} color={SECONDARY} />
            }
          />
          <IconCard
            title="Fashion"
            icon={
              <Ionicons name="ios-shirt-outline" size={20} color={SECONDARY} />
            }
          />
          <IconCard
            title="Food & Dining"
            icon={
              <Ionicons name="fast-food-outline" size={20} color={SECONDARY} />
            }
          />
        </ScrollView>
        <Divider />
        <View style={styles.checkBoxContainer}>
          <View style={styles.checkBox}>
            <View style={styles.box}>
              <Checkbox
                status={checkedFashion ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckedFashion(!checkedFashion);
                }}
                color={PRIMARY}
              />
            </View>
            <View style={styles.checkTextContainer}>
              <Text style={styles.checkBoxText}>Fashion</Text>
            </View>
          </View>
          {/* two */}
          <View
            style={{
              ...styles.checkBox,
              marginTop: Platform.OS === 'ios' ? scale(5) : 0,
            }}>
            <View style={styles.box}>
              <Checkbox
                status={checkedElec ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckedElec(!checkedElec);
                }}
                color={PRIMARY}
              />
            </View>
            <View style={styles.checkTextContainer}>
              <Text style={styles.checkBoxText}>Electronics</Text>
            </View>
          </View>
          {/* three */}
          <View
            style={{
              ...styles.checkBox,
              marginTop: Platform.OS === 'ios' ? scale(5) : 0,
            }}>
            <View style={styles.box}>
              <Checkbox
                status={checkedHealth ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckedHealth(!checkedHealth);
                }}
                color={PRIMARY}
              />
            </View>
            <View style={styles.checkTextContainer}>
              <Text style={styles.checkBoxText}>Health</Text>
            </View>
          </View>
          {/* four */}
          <View
            style={{
              ...styles.checkBox,
              marginTop: Platform.OS === 'ios' ? scale(5) : 0,
            }}>
            <View style={styles.box}>
              <Checkbox
                status={checkedFood ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckedFood(!checkedFood);
                }}
                color={PRIMARY}
              />
            </View>
            <View style={styles.checkTextContainer}>
              <Text style={styles.checkBoxText}>Food</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.viewMoreContainer}
            activeOpacity={0.7}
            onPress={() => Alert.alert('Loading....')}>
            <Text style={styles.viewMore}>View More..</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <ButtonMain style={styles.cardButton} onPress={clearAll}>
              <Text style={{...styles.buttonText, color: SECONDARY}}>
                Clear All
              </Text>
            </ButtonMain>
          </View>
          <View style={styles.button}>
            <ButtonMain>
              <LinearGradient
                colors={LINEARGRADIENT}
                style={styles.buttontextContainer}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}>
                <Text style={styles.buttonText}>Apply</Text>
              </LinearGradient>
            </ButtonMain>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center', backgroundColor: SCREEN},
  mainContainer: {
    width: windowWidth,
    alignItems: 'center',
    paddingHorizontal: scale(16),
    paddingBottom: 20,
  },
  floatingCategoryContainer: {
    width: windowWidth * 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(5),
    flexWrap: 'wrap',
  },
  checkBoxContainer: {
    padding: scale(2),
    width: '100%',
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SCREEN,
    borderColor: 'grey',
    borderWidth: Platform.OS === 'ios' ? 1 : 0,
  },
  checkTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    flex: 0.5,
    marginLeft: scale(10),
  },
  checkBoxText: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(15),
    color: HEADINGCOLOR,
    textAlignVertical: 'center',
  },
  viewMoreContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',

    marginVertical: scale(10),
  },
  viewMore: {
    fontFamily: 'Poppins-Semibold',
    fontSize: scale(12),
    color: PRIMARY,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: windowWidth * 1.6,
    position: 'absolute',
  },
  cardButton: {
    borderColor: SECONDARY,
    borderWidth: 1,
  },
  button: {
    flex: 0.48,
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
