import React from 'react';
import {
  View,
  Text,
  Button,
  Icon,
  Image,
  TouchableOpacity,
} from 'react-native';

function ItemDetails({route,navigation}) {
  // Render
  function renderInfo(){
    return(
       <View style={{marginTop:50,marginLeft:50,backgroundColor:'red', }}>
      <Text style={{fontSize:50}}>ItemDetails : {JSON.stringify(itemInfo)}</Text>
    </View>
    )
  }
  let { itemInfo } = route.params;

  return (
    <View style={{marginTop:50,marginLeft:50,backgroundColor:'red', }}>
      {renderInfo()}
    </View>
  );
}
export default ItemDetails;
