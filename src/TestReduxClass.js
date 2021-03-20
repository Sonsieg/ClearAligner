import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-picker'
class TestReduxClass extends Component {
  //Doi chut xem lai cach viet class
  take=()=>{
    ImagePicker.showImagePicker((response) => {
      if (response.didCancel) {
      } else if (response.error) {
        console.log('ImagePicker Error: ');
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
        const sourceImg = {uri: response.uri};
        console.log('sourceImg', sourceImg);
      }
  });
  }
  /// class dai vcl
  render() {
    return (
      <View>
        <Text>Test redux voi class</Text>
        <TouchableOpacity
          style={{padding: 3, backgroundColor: 'tomato'}}
          onPress={this.take}
        >
          {/* <Text>{this.props.list}</Text> */}
        </TouchableOpacity>
      </View>
    );
  }
}


export default TestReduxClass;
