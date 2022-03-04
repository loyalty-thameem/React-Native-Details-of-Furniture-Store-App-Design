import React from 'react';
import {
  View,
  Text,
  Button,
  Icon,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { COLORS, SIZES, icons } from '../constants';
function ItemDetails({ route, navigation }) {
  // Render
  function renderHeader() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
          marginHorizontal: SIZES.padding,backgroundColor:'blue' 
        }}>
        <View style={{ flexDirection: 'row',}}>
          <View style={{ flex: 1, alignItems: 'flex-start',backgroundColor:'red' }}>

            <TouchableOpacity onPress={() => console.log('Menu on clicked')}>
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={{
                  // imgae ah iruntha ah tintColor use pannanum
                  tintColor: COLORS.white,
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, alignItems: 'flex-end',backgroundColor:'yellow' }}>
            <TouchableOpacity onPress={() => console.log('Search on clicked')}>
              <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                  tintColor: COLORS.white,
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function renderInfo() {
    let { itemInfo } = route.params;
    // ithula itemInfola data yellaam irukku.
    if (itemInfo) {
      return (
        <ImageBackground
          source={itemInfo.image}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}>
          {/* inge image header design pannina ah component ah inge render pandrom */}
          {renderHeader()}
        </ImageBackground>
      );
    } else {
      <View style={{}}></View>;
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {renderInfo()}
    </View>
  );
}
export default ItemDetails;
