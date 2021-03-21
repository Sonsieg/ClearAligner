import React, {Component} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import asset from '../../../asset';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import vari from '../../../../theme/variables/platform';
import ButtonTab from '../../../components/ButtonTab';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import {setSaveImgFiveAction} from '../../../store/action'
class TabFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSource: '',
    };
  }

  take = () => {
    ImagePicker.showImagePicker((response) => {
      if (response.didCancel) {
      } else if (response.error) {
        console.log('ImagePicker Error: ');
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
        const sourceImg = {uri: response.uri};
        // console.log('sourceImg5', sourceImg);
        this.setState({imgSource: response});
        this.props.setSaveImgFiveAction(response.uri);
      }
    });
  };
  render() {
    return (
      <ImageBackground
        source={asset.background}
        style={{width: '100%', height: '100%'}}>
        <Top title="5" onPress={() => this.props.navigation.goBack()} />
        <View
          style={{
            marginHorizontal: scale(20),
            justifyContent: 'space-around',
            marginVertical: scale(20),
            height: '80%',
          }}>
          <Text style={{fontSize: scale(20)}}>Intra - Oral Views 1:2</Text>
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
              {this.state.imgSource === '' ? (
                <Text style={{fontSize: scale(18), textAlign: 'center'}}>
                  SELECT A PHOTO
                </Text>
              ) : (
                <Image
                  style={{
                    height: (vari.width * 0.9) / 2,
                    alignItems: 'center',
                    width: '100%',
                  }}
                  resizeMode="contain"
                  source={this.state.imgSource}
                />
              )}
            </View>
          </TouchableOpacity>
          <ButtonTab
            title="Next"
            onPress={() => this.props.navigation.navigate('TabSix')}
          />
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = (state) => ({
  imgOne: state.imgOne,
});
const mapDispatchToProps ={
  setSaveImgFiveAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TabFive);