import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {ROUTES} from '../routes';
import Home from '../../screens/Home';
import Device from '../../screens/Device';
import Account from '../../screens/Account';
import {COLORS, FONT} from '../../constants';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  const tabList = [
    {
      name: ROUTES.HOME,
      component: Home,
    },
    {
      name: ROUTES.DEVICE,
      component: Device,
    },
    {
      name: ROUTES.ACCOUNT,
      component: Account,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Tab.Group>
        {tabList?.map((item: any, index: any) => {
          return (
            <Tab.Screen
              key={item?.name}
              name={item?.name}
              component={item?.component}
              options={{
                tabBarStyle: styles.tabStyles,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: styles.tabFonts,
                tabBarIcon: ({focused}): any => {
                  if (focused) {
                    return (
                      <React.Fragment>
                        <Ionicons
                          name={
                            item?.name == ROUTES.HOME
                              ? 'home'
                              : item?.name == ROUTES.DEVICE
                              ? 'phone-portrait'
                              : 'person'
                          }
                          size={wp(6)}
                          color={COLORS.primary}
                        />
                        <View
                          style={{
                            height: wp(1),
                            width: wp(1),
                            backgroundColor: COLORS.primary,
                            borderRadius: wp(1),
                            position: 'absolute',
                            bottom: wp(-3),
                          }}
                        />
                      </React.Fragment>
                    );
                  }

                  return (
                    <Ionicons
                      name={
                        item?.name == ROUTES.HOME
                          ? 'home-outline'
                          : item?.name == ROUTES.DEVICE
                          ? 'phone-portrait-outline'
                          : 'person-outline'
                      }
                      size={wp(5)}
                      color={'gray'}
                    />
                  );
                },
              }}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabStyles: {
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    height: wp(16),
    borderTopWidth: 0,
    zIndex: 0,
  },
  tabFonts: {
    bottom: wp(2.6),
    fontSize: wp(3),
    fontFamily: FONT.notoSansMedium,
  },
});

export default TabNavigation;
