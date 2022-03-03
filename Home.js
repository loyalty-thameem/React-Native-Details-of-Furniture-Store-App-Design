import React from 'react';
import {
  View,
  Text,
  Button,
  Icon,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';

const Home = () => {
  // ithu parent function inside the child function but i don't know this realname
  // Render 1
  function renderHeader() {
    return (
      // yean flex 1 ah flex use pannumbothu big screen size comfortah irukku but athu illame irukku anaa mistake varumnu neenaikiren
      <View
        style={{ paddingHorizontal: SIZES.padding, backgroundColor: 'yellow' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: 'purple' }}
            onPress={() => alert('Menu on clicked')}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'orange',
              alignItems: 'flex-end',
            }}
            onPress={() => alert('Cart on clicked')}>
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Render 2
  function renderTitle(title) {
    return (
      <View
        style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding,backgroundColor:'red' }}>
        <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>
          Collection of
        </Text>
        //ithula title props ah work aaguthu
        <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>
          {title}
        </Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      //parameter ah value ah pass pandren...
      {renderTitle('Test title')}
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
