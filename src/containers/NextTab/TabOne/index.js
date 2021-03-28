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
import vari from '../../../../theme/variables/platform';
import ButtonTab from '../../../components/ButtonTab';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {setSaveImgOneAction} from '../../../store/action';
import * as Progress from 'react-native-progress';
import storage from '@react-native-firebase/storage';
class TabOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSource: '',
      image: null,
      uploading: false,
      transferred: 0,
    };
  }
  uploadImage = async () => {
    const {uri} = this.state.image;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    this.setState({uploading: true});
    this.setState({transferred: 0});
    const task = storage().ref(filename).putFile(uploadUri);
    // set progress state
    task.on('state_changed', (snapshot) => {
      this.setState({
        transferred:
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
      });
    });
    try {
      await task;
    } catch (e) {
      console.error(e);
    }
    this.setState({uploading: false});
    Alert.alert(
      'Photo uploaded!',
      'Your photo has been uploaded to Firebase Cloud Storage!',
    );
    this.setState({image: null});
  };
  take = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
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
        // this.setState({image: sourceImg});
        this.setState({imgSource: response});
        this.props.setSaveImgOneAction(response.uri);
      }
    });
  };
  render() {
    return (
      <ImageBackground
        source={asset.background}
        style={{width: '100%', height: '100%'}}>
        <Top title="1" onPress={() => this.props.navigation.goBack()} />
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
          <TouchableOpacity
            onPress={this.take}
            // onPress={this.selectImage}
          >
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
          {/* {this.state.uploading ? (
            <View style={{marginTop: 20}}>
              <Progress.Bar progress={this.state.transferred} width={300} />
            </View>
          ) : (
            <TouchableOpacity
              style={{width: 700, height: 50}}
              onPress={this.uploadImage}>
              <Text style={{fontSize: 20}}>Upload image</Text>
            </TouchableOpacity>
          )} */}
          <ButtonTab
            title="Next"
            onPress={() => this.props.navigation.navigate('TabTwo')}
            // onPress={this.uploadImage}
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
  setSaveImgOneAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabOne);
