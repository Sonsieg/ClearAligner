import React, {Component} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import asset from '../../../asset';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import vari from '../../../../theme/variables/platform';
import ButtonTab from '../../../components/ButtonTab';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {setSaveImgSevenAction} from '../../../store/action';
class TabSeven extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSource: '',
    };
  }

  take = () => {
    const options = {
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality: 0.5,
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
        console.log('ImagePicker Error: ');
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
        const sourceImg = {uri: response.uri};
        this.setState({imgSource: sourceImg});
        this.props.setSaveImgSevenAction(sourceImg);
      }
    });
  };
  render() {
    return (
      <ImageBackground
        source={asset.background}
        style={{width: '100%', height: '100%'}}>
        <Top title="Add a new enquiry" onPress={() => this.props.navigation.goBack()} />
        <View
          style={{
            marginHorizontal: scale(20),
            justifyContent: 'space-around',
            marginVertical: scale(20),
            height: '80%',
          }}>
          <Text style={{fontSize: scale(20)}}>Please take photos</Text>
          <View
            style={{
              width: '100%',
              height: (vari.width * 1) / 2,
              backgroundColor: 'black',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: (vari.width * 0.9) / 2,
                alignItems: 'center',
                width: '100%',
              }}
              resizeMode="contain"
              source={asset.seven}
            />
          </View>
          <Text
            style={{fontSize: scale(20), color: 'blue', textAlign: 'center'}}>
            Extra - Oral Views 7:8
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
            onPress={() => this.props.navigation.navigate('TabEight')}
          />
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = (state) => ({
  imgOne: state.imgOne,
});
const mapDispatchToProps = {
  setSaveImgSevenAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabSeven);
