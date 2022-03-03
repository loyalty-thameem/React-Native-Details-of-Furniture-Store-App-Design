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
  const [tabList, setTabList] = React.useState([
        {
            id: 0,
            name: "Chair",
            title: "chairs",
            productList: [
                {
                    productId: 1,
                    productName: 'Chair Green Colour',
                    price: 10.00,
                    image: images.greenChair,
                },
                {
                    productId: 2,
                    productName: 'Chair Peach Colour',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: 'Chair White Colour',
                    price: 10.00,
                    image: images.whiteChair,
                },
            ]
        },
        {
            id: 1,
            name: "Cupboard",
            title: 'cupboards',
            productList: [
                {
                    productId: 4,
                    productName: 'Product 4',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 5,
                    productName: 'Product 5',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 6,
                    productName: 'Product 6',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 2,
            name: "Table",
            title: 'tables',
            productList: [
                {
                    productId: 7,
                    productName: 'Product 7',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 8,
                    productName: 'Product 8',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 9,
                    productName: 'Product 9',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 3,
            name: "Accessories",
            title: 'accessories',
            productList: [
                {
                    productId: 10,
                    productName: 'Product 10',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 11,
                    productName: 'Product 11',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 12,
                    productName: 'Product 12',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        }
    ])

    // dummyData2 
  // render 2la titlekku selectedTab value pass aguthu

    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: "Chair",
        title: 'chairs',
        productList: [
            {
                productId: 1,
                productName: 'Chair Green Colour',
                price: 10.00,
                image: images.greenChair,
            },
            {
                productId: 2,
                productName: 'Chair Peach Colour',
                price: 10.00,
                image: images.redChair,
            },
            {
                productId: 3,
                productName: 'Chair White Colour',
                price: 10.00,
                image: images.whiteChair,
            },

        ]
    })
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
        <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>
          {title}
        </Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
              {/*renderTitle('Test title')*/}
        
          {/*renderTitle('dummyData2la irunthu ') statela ulla title params eduthukurom */}
       {renderTitle(selectedTab.title)}
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
