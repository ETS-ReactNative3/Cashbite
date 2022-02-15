import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {set} from 'react-native-reanimated';
import {scale} from 'react-native-size-matters';
import Card from '../../components/cards/Card';
import Divider from '../../components/divider/Divider';
import HeaderNav from '../../components/headers/HeaderNav';
import {
  BLUE,
  GREEN,
  PLACEHOLDERTEXT,
  PRIMARY,
  RED,
  SCREEN,
  TEXTBLACK,
  TEXTWHITE,
  YELLOW,
} from '../../constants/colors';
import {PURCHASES} from '../../tempData/tempText';
import {windowWidth} from '../../utils/dimensions';
const CashBackActivity = ({route}) => {
  const [tab, setTab] = useState(1);
  const [bonus, setBonus] = useState(1);
  const [details, setDetails] = useState(1);
  return (
    <View style={styles.screen}>
      <HeaderNav title={route.name} menu>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setTab(1)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: SCREEN,
            borderBottomWidth: tab === 1 ? 2 : 0,
            flex: 1,
          }}>
          <Text style={styles.headerText}>Cashback</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setTab(2)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: SCREEN,
            borderBottomWidth: tab === 2 ? 2 : 0,
            flex: 1,
          }}>
          <Text style={styles.headerText}>Clicks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setTab(3)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: SCREEN,
            borderBottomWidth: tab === 3 ? 2 : 0,
            flex: 1,
          }}>
          <Text style={styles.headerText}>Claims</Text>
        </TouchableOpacity>
      </HeaderNav>
      {tab === 1 && (
        <View style={styles.tabs}>
          <View style={styles.switchBar}>
            <TouchableOpacity
              onPress={() => setBonus(1)}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: bonus === 1 ? PRIMARY : SCREEN,
                padding: scale(5),
                height: '100%',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: scale(13),
                  color: bonus === 1 ? TEXTWHITE : TEXTBLACK,
                }}>
                Cashback Purchases
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setBonus(2)}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: bonus === 2 ? PRIMARY : SCREEN,
                padding: scale(2),
                height: '100%',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: scale(13),
                  color: bonus === 2 ? TEXTWHITE : TEXTBLACK,
                }}>
                Bonuses
              </Text>
            </TouchableOpacity>
          </View>
          {bonus === 1 && (
            <View style={styles.section}>
              <Text
                style={[
                  styles.headerText,
                  {
                    fontSize: scale(11),
                    color: PLACEHOLDERTEXT,
                    textAlign: 'left',
                  },
                ]}>
                Monitor all your purchases made via CouponDunia and track your
                cashback status
              </Text>
              <FlatList
                style={{width: windowWidth, flex: 1}}
                contentContainerStyle={{
                  width: windowWidth,
                  alignItems: 'center',
                  paddingBottom: scale(30),
                  paddingTop: scale(10),
                }}
                data={PURCHASES}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                  details !== item.id ? (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => setDetails(item.id)}>
                      <Card
                        style={{
                          marginBottom: scale(20),
                          width: windowWidth * 0.88,
                        }}>
                        <Text style={styles.text}>{item.date}</Text>
                        <Text
                          style={[
                            styles.headerText,
                            {
                              color: TEXTBLACK,
                              textAlign: 'left',
                              width: '100%',
                              marginTop: 10,
                            },
                          ]}>
                          Merchant: {item.merchant}
                        </Text>
                      </Card>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => setDetails('')}>
                      <Card
                        style={{
                          marginBottom: scale(20),
                          width: windowWidth * 0.88,
                        }}>
                        <Text style={styles.text}>{item.date}</Text>
                        <Text
                          style={[
                            styles.headerText,
                            {
                              color: TEXTBLACK,
                              textAlign: 'left',
                              width: '100%',
                              marginTop: 5,
                            },
                          ]}>
                          Merchant: {item.merchant}
                        </Text>
                        <Divider style={{marginVertical: scale(10)}} />
                        <View style={styles.spaceView}>
                          <Text
                            style={[
                              styles.headerText,
                              {fontSize: scale(12), color: TEXTBLACK},
                            ]}>
                            Estimate:
                          </Text>
                          <Text
                            style={[
                              styles.text,
                              {
                                color: TEXTBLACK,
                                width: null,
                                paddingHorizontal: scale(2),
                              },
                            ]}>
                            Rs. {item.details.estimate}
                          </Text>
                        </View>
                        <View style={[styles.spaceView, {marginVertical: 2}]}>
                          <Text
                            style={[
                              styles.headerText,
                              {fontSize: scale(12), color: TEXTBLACK},
                            ]}>
                            Expected By:
                          </Text>
                          <Text
                            style={[
                              styles.text,
                              {
                                color: TEXTBLACK,
                                width: null,
                                paddingHorizontal: scale(4),
                              },
                            ]}>
                            Rs. {item.details.expected}
                          </Text>
                        </View>
                        <View style={styles.spaceView}>
                          <Text
                            style={[
                              styles.headerText,
                              {fontSize: scale(12), color: TEXTBLACK},
                            ]}>
                            Status:
                          </Text>
                          <Text
                            style={[
                              styles.headerText,
                              {
                                fontSize: scale(12),
                                color:
                                  item.details.stats === 'Pending'
                                    ? YELLOW
                                    : item.details.stats === 'Canceled'
                                    ? RED
                                    : item.details.stats === 'Ongoing'
                                    ? BLUE
                                    : item.details.stats === 'Approved'
                                    ? GREEN
                                    : TEXTBLACK,
                              },
                            ]}>
                            {item.details.stats}
                          </Text>
                        </View>
                      </Card>
                    </TouchableOpacity>
                  )
                }
              />
            </View>
          )}
          {bonus === 2 && (
            <View style={styles.section}>
              <Text
                style={[
                  styles.headerText,
                  {
                    fontSize: scale(11),
                    color: PLACEHOLDERTEXT,
                    textAlign: 'left',
                  },
                ]}>
                Summary of all the bonus money you have earned from CouponDunia.
              </Text>
              <FlatList
                style={{width: windowWidth, flex: 1}}
                contentContainerStyle={{
                  width: windowWidth,
                  alignItems: 'center',
                  paddingBottom: scale(30),
                  paddingTop: scale(10),
                }}
                data={PURCHASES}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                  details !== item.id ? (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => setDetails(item.id)}>
                      <Card
                        style={{
                          marginBottom: scale(20),
                          width: windowWidth * 0.88,
                        }}>
                        <Text style={styles.text}>{item.date}</Text>
                        <Text
                          style={[
                            styles.headerText,
                            {
                              color: TEXTBLACK,
                              textAlign: 'left',
                              width: '100%',
                              marginTop: 10,
                            },
                          ]}>
                          Type: {item.type}
                        </Text>
                      </Card>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => setDetails('')}>
                      <Card
                        style={{
                          marginBottom: scale(20),
                          width: windowWidth * 0.88,
                        }}>
                        <Text style={styles.text}>{item.date}</Text>
                        <Text
                          style={[
                            styles.headerText,
                            {
                              color: TEXTBLACK,
                              textAlign: 'left',
                              width: '100%',
                              marginTop: 5,
                            },
                          ]}>
                          Type: {item.type}
                        </Text>
                        <Divider style={{marginVertical: scale(10)}} />
                        <View style={styles.spaceView}>
                          <Text
                            style={[
                              styles.headerText,
                              {fontSize: scale(12), color: TEXTBLACK},
                            ]}>
                            Bonus Ammount:
                          </Text>
                          <Text
                            style={[
                              styles.text,
                              {
                                color: TEXTBLACK,
                                width: null,
                                paddingHorizontal: scale(2),
                              },
                            ]}>
                            Rs. {item.details.bonus}
                          </Text>
                        </View>
                        <View style={[styles.spaceView, {marginTop: 2}]}>
                          <Text
                            style={[
                              styles.headerText,
                              {fontSize: scale(12), color: TEXTBLACK},
                            ]}>
                            Status:
                          </Text>
                          <Text
                            style={[
                              styles.headerText,
                              {
                                fontSize: scale(12),
                                color:
                                  item.details.stats === 'Pending'
                                    ? YELLOW
                                    : item.details.stats === 'Canceled'
                                    ? RED
                                    : item.details.stats === 'Ongoing'
                                    ? BLUE
                                    : item.details.stats === 'Approved'
                                    ? GREEN
                                    : TEXTBLACK,
                              },
                            ]}>
                            {item.details.stats}
                          </Text>
                        </View>
                      </Card>
                    </TouchableOpacity>
                  )
                }
              />
            </View>
          )}
        </View>
      )}
      {tab === 2 && (
        <View style={styles.tabs}>
          <Text
            style={[
              styles.headerText,
              {
                fontSize: scale(11),
                color: PLACEHOLDERTEXT,
                textAlign: 'left',
                width: '100%',
              },
            ]}>
            List of CouponDunia cashback offers you clicked on
          </Text>
          <FlatList
            style={{width: windowWidth, flex: 1}}
            contentContainerStyle={{
              width: windowWidth,
              alignItems: 'center',
              paddingBottom: scale(30),
              paddingTop: scale(10),
            }}
            data={PURCHASES}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
              details !== item.id ? (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => setDetails(item.id)}>
                  <Card
                    style={{
                      marginBottom: scale(20),
                      width: windowWidth * 0.88,
                    }}>
                    <Text style={styles.text}>{item.date}</Text>
                    <Text
                      style={[
                        styles.headerText,
                        {
                          color: TEXTBLACK,
                          textAlign: 'left',
                          width: '100%',
                          marginTop: 10,
                        },
                      ]}>
                      Merchant: {item.merchant}
                    </Text>
                  </Card>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => setDetails('')}>
                  <Card
                    style={{
                      marginBottom: scale(20),
                      width: windowWidth * 0.88,
                    }}>
                    <Text style={styles.text}>{item.date}</Text>
                    <Text
                      style={[
                        styles.headerText,
                        {
                          color: TEXTBLACK,
                          textAlign: 'left',
                          width: '100%',
                          marginTop: 5,
                        },
                      ]}>
                      Merchant: {item.merchant}
                    </Text>
                    <Divider style={{marginVertical: scale(10)}} />
                    <View style={styles.spaceView}>
                      <Text
                        style={[
                          styles.headerText,
                          {fontSize: scale(12), color: TEXTBLACK},
                        ]}>
                        Click Id:
                      </Text>
                      <Text
                        style={[
                          styles.text,
                          {
                            color: TEXTBLACK,
                            width: null,
                            paddingHorizontal: scale(2),
                          },
                        ]}>
                        {item.id}
                      </Text>
                    </View>
                    <View style={[styles.spaceView, {marginTop: 2}]}>
                      <Text
                        style={[
                          styles.headerText,
                          {fontSize: scale(12), color: TEXTBLACK},
                        ]}>
                        Status:
                      </Text>
                      <Text
                        style={[
                          styles.headerText,
                          {
                            fontSize: scale(12),
                            color:
                              item.details.stats === 'Pending'
                                ? YELLOW
                                : item.details.stats === 'Canceled'
                                ? RED
                                : item.details.stats === 'Ongoing'
                                ? BLUE
                                : item.details.stats === 'Approved'
                                ? GREEN
                                : TEXTBLACK,
                          },
                        ]}>
                        {item.details.stats}
                      </Text>
                    </View>
                  </Card>
                </TouchableOpacity>
              )
            }
          />
        </View>
      )}
      {tab === 3 && (
        <View style={styles.tabs}>
          <Text
            style={[
              styles.headerText,
              {
                fontSize: scale(11),
                color: PLACEHOLDERTEXT,
                textAlign: 'left',
                width: '100%',
              },
            ]}>
            Your Not Tracked Claims
          </Text>
          <FlatList
            style={{width: windowWidth, flex: 1}}
            contentContainerStyle={{
              width: windowWidth,
              alignItems: 'center',
              paddingBottom: scale(30),
              paddingTop: scale(10),
            }}
            data={PURCHASES}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
              details !== item.id ? (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => setDetails(item.id)}>
                  <Card
                    style={{
                      marginBottom: scale(20),
                      width: windowWidth * 0.88,
                    }}>
                    <Text style={styles.text}>{item.date}</Text>
                    <Text
                      style={[
                        styles.headerText,
                        {
                          color: TEXTBLACK,
                          textAlign: 'left',
                          width: '100%',
                          marginTop: 10,
                        },
                      ]}>
                      Merchant: {item.merchant}
                    </Text>
                  </Card>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => setDetails('')}>
                  <Card
                    style={{
                      marginBottom: scale(20),
                      width: windowWidth * 0.88,
                    }}>
                    <Text style={styles.text}>{item.date}</Text>
                    <Text
                      style={[
                        styles.headerText,
                        {
                          color: TEXTBLACK,
                          textAlign: 'left',
                          width: '100%',
                          marginTop: 5,
                        },
                      ]}>
                      Merchant: {item.merchant}
                    </Text>
                    <Divider style={{marginVertical: scale(10)}} />
                    <View style={styles.spaceView}>
                      <Text
                        style={[
                          styles.headerText,
                          {fontSize: scale(12), color: TEXTBLACK},
                        ]}>
                        Click Id:
                      </Text>
                      <Text
                        style={[
                          styles.text,
                          {
                            color: TEXTBLACK,
                            width: null,
                            paddingHorizontal: scale(2),
                          },
                        ]}>
                        {item.id}
                      </Text>
                    </View>
                    <View style={[styles.spaceView, {marginVertical: 2}]}>
                      <Text
                        style={[
                          styles.headerText,
                          {fontSize: scale(12), color: TEXTBLACK},
                        ]}>
                        Amount:
                      </Text>
                      <Text
                        style={[
                          styles.text,
                          {
                            color: TEXTBLACK,
                            width: null,
                            paddingHorizontal: scale(2),
                          },
                        ]}>
                        Rs. {item.details.amount}
                      </Text>
                    </View>
                    <View style={styles.spaceView}>
                      <Text
                        style={[
                          styles.headerText,
                          {fontSize: scale(12), color: TEXTBLACK},
                        ]}>
                        Status:
                      </Text>
                      <Text
                        style={[
                          styles.headerText,
                          {
                            fontSize: scale(12),
                            color:
                              item.details.stats === 'Pending'
                                ? YELLOW
                                : item.details.stats === 'Canceled'
                                ? RED
                                : item.details.stats === 'Ongoing'
                                ? BLUE
                                : item.details.stats === 'Approved'
                                ? GREEN
                                : TEXTBLACK,
                          },
                        ]}>
                        {item.details.stats}
                      </Text>
                    </View>
                  </Card>
                </TouchableOpacity>
              )
            }
          />
        </View>
      )}
    </View>
  );
};

export default CashBackActivity;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
  },
  headerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(14),
    color: TEXTWHITE,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  tabs: {
    width: windowWidth,
    flex: 1,
    alignItems: 'center',
    marginTop: scale(15),
    paddingHorizontal: scale(15),
  },
  switchBar: {
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1.5,
    width: windowWidth * 0.9,
    height: windowWidth * 0.12,
    overflow: 'hidden',
    borderColor: PRIMARY,
  },
  section: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: scale(2),
    marginTop: scale(5),
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(11),
    color: PLACEHOLDERTEXT,
    textAlign: 'left',
    textAlignVertical: 'center',
    width: '100%',
  },
  spaceView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
});
