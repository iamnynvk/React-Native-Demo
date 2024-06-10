import React, {useState} from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Appbar, Menu} from 'react-native-paper';
import {COLORS} from '../constants';

interface IAppBarProps {
  title: string;
  isBack?: boolean;
  onBackPress?: () => void;
  isBell?: boolean;
  onBellPress?: () => void;
  isMenu?: boolean;
}

const AppBars = ({
  title,
  isBack,
  onBackPress,
  isBell,
  onBellPress,
  isMenu,
}: IAppBarProps) => {
  const [visibleArrow, setVisibleArrow] = useState(false);
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const closeDrawer = () => setDropDownVisible(false);

  return (
    <Appbar.Header style={styles.appBarStyles}>
      {isBack && <Appbar.BackAction onPress={onBackPress} />}
      <Appbar.Content title={title} titleStyle={styles.titleStyles} />
      {isBell && (
        <Appbar.Action
          icon="bell-outline"
          color={COLORS.white}
          style={{position: 'absolute', right: wp(10)}}
          onPress={onBellPress}
        />
      )}
      {(isMenu || visibleArrow) && (
        <Menu
          visible={dropDownVisible}
          onDismiss={closeDrawer}
          style={styles.menuStyles}
          anchorPosition={'bottom'}
          keyboardShouldPersistTaps="always"
          contentStyle={styles.menuContent}
          anchor={
            <TouchableOpacity
              activeOpacity={1}
              style={styles.dropDownContainer}
              onPress={() => {
                setVisibleArrow(!visibleArrow);
                setDropDownVisible(!dropDownVisible);
              }}>
              <MaterialCommunityIcons
                name={
                  Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'
                }
                color={COLORS.white}
                size={hp(3)}
              />
            </TouchableOpacity>
          }>
          <Menu.Item
            leadingIcon="cog"
            onPress={() => {
              setDropDownVisible(false);
            }}
            title="Setting"
          />
          <Menu.Item
            leadingIcon="logout"
            onPress={() => {
              setDropDownVisible(false);
            }}
            title="Logout"
          />
        </Menu>
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appBarStyles: {
    backgroundColor: COLORS.primary,
  },
  titleStyles: {
    alignSelf: 'center',
    color: COLORS.white,
  },
  menuStyles: {
    padding: 0,
    margin: 0,
  },
  menuContent: {
    backgroundColor: COLORS.white,
    margin: 0,
    padding: 0,
  },
  dropDownContainer: {
    padding: wp(1),
  },
});

export default AppBars;
