import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Avatar} from 'react-native-elements';
import Header from '../../components/headers/Header';
import {windowWidth} from '../../utils/dimensions';
import {scale, verticalScale} from 'react-native-size-matters';
import {
  PLACEHOLDERTEXT,
  SCREEN,
  ICONCOLOR,
  LINEARGRADIENT,
  BLACK,
  GREEN,
  PRIMARY,
  SHADOWCOLOR,
  DRAWERBACKGROUND,
} from '../../constants/colors';
import FilterButton from '../../components/buttons/FilterButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {iconSize} from '../../constants/iconSize';
import LinearGradient from 'react-native-linear-gradient';
import InputField from '../../components/searchBarPlate/InputField';
import {user} from '../../tempData/tempText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';
import ButtonMain from '../../components/buttons/ButtonMain';
import {StatusBar} from 'react-native';
import DropdownComponent from '../../components/dropdown/DropdownComponent';
import {Dropdown} from 'react-native-element-dropdown';
import Card from '../../components/cards/Card';
import {AUTHSTACK, LOGIN} from '../../constants/routeNames';

const Profile = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('Male');
  const [status, setStatus] = useState('Single');
  const [city, setCity] = useState('Jaipur');
  // const [birthday, setBirthday] = useState(user.map(item => item.Birthday));
  //imagePicker
  const [image, setImage] = useState(
    'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
  );
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageQuality: 0.7,
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  const chooseFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      compressImageQuality: 0.7,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={DRAWERBACKGROUND} />
      <Header rightComponent={false} menu title={route.name} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewBox}
        showsVerticalScrollIndicator={false}>
        {/* ProfileImage */}
        <View style={styles.imageContainer}>
          <Avatar
            rounded
            size={windowWidth * 0.34}
            overlayContainerStyle={{backgroundColor: 'white'}}
            source={{
              uri: image,
            }}
          />
          <TouchableOpacity
            style={styles.imagePicker}
            activeOpacity={0.9}
            onLongPress={takePhotoFromCamera}
            onPress={chooseFromLibrary}>
            <LinearGradient
              style={styles.ImagePickerBackground}
              colors={LINEARGRADIENT}>
              <Ionicons
                name="ios-camera-sharp"
                size={iconSize - 5}
                color={ICONCOLOR}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.fields}>
          <Text style={styles.userName}>{user.map(item => item.email)}</Text>
          <AntDesign
            name="checkcircle"
            size={iconSize - 5}
            color={GREEN}
            style={{marginLeft: scale(10)}}
          />
        </View>
        <View style={[styles.fields, {marginTop: 0, flexDirection: 'column'}]}>
          <InputField title="Full Name" regular>
            <Text style={styles.text_input}>
              {user.map(item => item.FullName)}
            </Text>
          </InputField>
          <InputField title="Phone Number" regular>
            <View style={styles.codeContainer}>
              <Text
                style={{
                  ...styles.buttonText,
                  color: BLACK,
                  fontSize: scale(12),
                  marginRight: scale(10),
                }}>
                +91
              </Text>
            </View>
            <Text style={[styles.text_input, {marginLeft: scale(10)}]}>
              {user.map(item => item.Phone)}
            </Text>
          </InputField>
          <InputField regular title="Birthday">
            {/* <TextInput
              placeholder="Birthday"
              style={styles.text_input}
              value={birthday}
              keyboardType="default"
              onChangeText={item => setBirthday(item)}
            /> */}
            <Text style={styles.text_input}>
              {user.map(item => item.Birthday)}
            </Text>

            <MaterialIcons
              name="calendar-today"
              size={iconSize}
              color={PRIMARY}
            />
          </InputField>
        </View>
        <View style={[styles.fields, {flexDirection: 'column'}]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: scale(20),
              marginTop: 15,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: scale(12),
                color: BLACK,
                textAlignVertical: 'center',
                textAlign: 'left',
              }}>
              Gender:
            </Text>
            <RadioButton.Group
              value={value}
              onValueChange={newValue => setValue(newValue)}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: scale(12),
                    color: BLACK,
                    textAlignVertical: 'center',
                    textAlign: 'left',
                  }}>
                  Male
                </Text>
                <RadioButton.Android value="Male" color={PRIMARY} />
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: scale(12),
                    color: BLACK,
                    textAlignVertical: 'center',
                    textAlign: 'left',
                  }}>
                  Female
                </Text>
                <RadioButton.Android value="Female" color={PRIMARY} />
              </View>
            </RadioButton.Group>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: scale(20),
              marginTop: 15,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: scale(12),
                color: BLACK,
                textAlignVertical: 'center',
                textAlign: 'left',
              }}>
              Marital Status:
            </Text>
            <RadioButton.Group
              value={status}
              onValueChange={newValue => setStatus(newValue)}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: scale(40),
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: scale(12),
                    color: BLACK,
                    textAlignVertical: 'center',
                    textAlign: 'left',
                  }}>
                  Single
                </Text>
                <RadioButton.Android value="Single" color={PRIMARY} />
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: scale(12),
                    color: BLACK,
                    textAlignVertical: 'center',
                    textAlign: 'left',
                  }}>
                  Married
                </Text>
                <RadioButton.Android value="Married" color={PRIMARY} />
              </View>
            </RadioButton.Group>
          </View>
          <InputField title="City" regular>
            <DropdownComponent />
          </InputField>
        </View>
        <ButtonMain
          onPress={() => setModalVisible(true)}
          style={{
            borderColor: PRIMARY,
            borderWidth: 1,
            marginTop: scale(20),
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: scale(12),
              color: PRIMARY,
              textAlignVertical: 'center',
              textAlign: 'left',
            }}>
            Logoff
          </Text>
        </ButtonMain>
        {/* modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setModalVisible(false);
            }}>
            <View style={styles.modalView}>
              <Card style={{width: windowWidth * 0.9, opacity: 1}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: scale(12),
                    color: BLACK,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    marginBottom: scale(10),
                  }}>
                  Logout
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: scale(12),
                    color: BLACK,
                    textAlignVertical: 'center',
                    textAlign: 'left',
                  }}>
                  Are you sure want to logout?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: scale(15),
                  }}>
                  <ButtonMain
                    onPress={() => {
                      navigation.replace(LOGIN);
                    }}
                    style={{
                      width: windowWidth * 0.4,
                      height: scale(45),
                      borderColor: PRIMARY,
                      borderWidth: 1,
                    }}>
                    <Text style={([styles.buttonText], {color: PRIMARY})}>
                      Yes
                    </Text>
                  </ButtonMain>
                  <ButtonMain
                    style={{height: scale(45), width: windowWidth * 0.4}}
                    onPress={() => setModalVisible(false)}>
                    <LinearGradient
                      colors={LINEARGRADIENT}
                      style={styles.buttontextContainer}
                      start={{x: 1, y: 0}}
                      end={{x: 0, y: 0}}>
                      <Text style={styles.buttonText}>No</Text>
                    </LinearGradient>
                  </ButtonMain>
                </View>
              </Card>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
      <View style={styles.loginButtonContainer}>
        <ButtonMain style={styles.button}>
          <LinearGradient
            colors={LINEARGRADIENT}
            style={styles.buttontextContainer}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}>
            <Text style={styles.buttonText}>Save</Text>
          </LinearGradient>
        </ButtonMain>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
  },
  scrollView: {
    width: windowWidth,
    alignSelf: 'center',
    marginBottom: scale(65),
  },
  scrollViewBox: {
    paddingHorizontal: scale(16),
    alignItems: 'center',
    paddingBottom: scale(30),
    paddingVertical: verticalScale(20),
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imagePicker: {
    height: scale(25),
    width: scale(25),
    borderRadius: scale(14),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'absolute',
    bottom: scale(2),
    right: scale(109),
  },
  ImagePickerBackground: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fields: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: scale(10),
  },
  text_input: {
    flex: 1,
    color: BLACK,
    fontFamily: 'Poppins-Regular',
    fontSize: scale(14),
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  userName: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(14),
    color: PLACEHOLDERTEXT,
  },
  codeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: PLACEHOLDERTEXT,
    borderRightWidth: 1,
    height: '60%',
  },
  buttonText: {
    fontSize: scale(15),
    fontFamily: 'Poppins-Medium',
    color: SCREEN,
    textAlign: 'center',
  },
  loginButtonContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? scale(18.2) : scale(17.5),
    width: windowWidth * 0.8,
    elevation: 5,
    shadowColor: Platform.OS === 'ios' ? PLACEHOLDERTEXT : null,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.8,
    borderRadius: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontextContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: windowWidth * 0.8,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
