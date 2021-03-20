import React, {Component} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import asset from '../../../asset';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import vari from '../../../../theme/variables/platform';
import ButtonTab from '../../../components/ButtonTab';
import ImagePicker from 'react-native-image-picker'
 class TabOne extends Component {
  constructor(props){
    super(props);
    this.state={
      imgSource: ''
    }
  }

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
        this.setState({imgSource: response});
        console.log('object222222222', sourceImg)
      }
  });
  }
  render() {
    return (
      <ImageBackground
        source={asset.background}
        style={{width: '100%', height: '100%'}}>
        <Top title="Add a new enquiry" onPress={()=>this.props.navigation.goBack()}/>
        <View
          style={{
            marginHorizontal: scale(20),
            justifyContent: 'space-around',
            marginVertical: scale(20),
            height: '80%',
          }}>
          <Text style={{fontSize: scale(20)}}>
            Please take photos as shown on the diagrams
          </Text>
          <View
            style={{
              width: '100%',
              height: (vari.width * 1) / 2,
              backgroundColor: 'black',
            }}></View>
          <Text
            style={{fontSize: scale(20), color: 'blue', textAlign: 'center'}}>
            Extra - Oral Views 1:8
          </Text>
          <TouchableOpacity onPress={this.take}>
            <View
              style={{
                width: '100%',
                height: (vari.width * 1) / 2,
                backgroundColor: 'white',
                borderWidth: scale(1),
                justifyContent: 'center',
              }}>
                {this.state.imgSource === ''? (<Text style={{fontSize: scale(18), textAlign: 'center'}}>
                SELECT A PHOTO
              </Text>): (
                <Image style={{height: (vari.width * 0.9) / 2, alignItems:"center", width:"100%"}}
                resizeMode="contain"
                source={this.state.imgSource}
                />
              )}
              
            </View>
          </TouchableOpacity>
          <ButtonTab title="Next" onPress={() => this.props.navigation.navigate('TabTwo')}/>
        </View>
      </ImageBackground>
    );
  }
}
export default TabOne;