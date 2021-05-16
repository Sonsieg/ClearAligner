import React, {Component} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import asset from '../../../asset';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import ButtonTab from '../../../components/ButtonTab';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {setSaveImgTwoAction} from '../../../store/action';
import styless from '../../styless';
class TabTwo extends Component {
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
        this.props.setSaveImgTwoAction(sourceImg);
      }
    });
  };
  render() {
    return (
      <ImageBackground
        source={asset.background}
        style={{width: '100%', height: '100%'}}>
        <Top
          title="Add a new enquiry"
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={styless.viewOne}>
          <Text style={{fontSize: scale(20)}}>Please take photos</Text>
          <View style={styless.viewTwo}>
            <Image
              style={styless.imgOne}
              resizeMode="contain"
              source={asset.two}
            />
          </View>
          <Text style={styless.textOne}>Extra - Oral Views 2:8</Text>
          <TouchableOpacity onPress={this.take}>
            <View style={styless.viewThree}>
              {this.state.imgSource === '' ? (
                <Text style={styless.textTwo}>SELECT A PHOTO</Text>
              ) : (
                <Image
                  style={styless.imgTwo}
                  resizeMode="contain"
                  source={this.state.imgSource}
                />
              )}
            </View>
          </TouchableOpacity>
          <ButtonTab
            title="Next"
            onPress={() => this.props.navigation.navigate('TabThree')}
          />
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = (state) => ({
});
const mapDispatchToProps = {
  setSaveImgTwoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabTwo);
