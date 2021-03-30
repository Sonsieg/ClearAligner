import React, {Component} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import asset from '../../asset';
import ButtonTab from '../../components/ButtonTab';
import {scale} from '../../components/ScaleSheet';
import Top from '../../components/Top';
import storage from '@react-native-firebase/storage';
import * as Progress from 'react-native-progress';
import {connect} from 'react-redux';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      uploading: false,
      transferred: 0,
    };
  }
  uploadImage = async () => {
    const {dataImg} = this.props;
    const {uri} = dataImg[0];
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = uri;
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
  };

  render() {
    console.log('data Img', this.props.dataImg);
    console.log('data One', this.props.dataOne);
    console.log('data Two', this.props.dataTwo);
    return (
      <ImageBackground
        source={asset.backgroundend}
        style={{width: '100%', height: '100%'}}>
        <TouchableOpacity
          style={{width: scale(55), height: scale(55)}}
          onPress={() => this.props.navigation.goBack()}>
          <Image
            resizeMode="center"
            style={{width: scale(55), height: scale(55)}}
            source={asset.icongoBack}
          />
        </TouchableOpacity>
        <View
          style={{
            // backgroundColor: 'red',
            alignItems: 'center',
            marginHorizontal: scale(20),
            justifyContent: 'space-around',
            height: '90%',
          }}>
          <Image
            style={{width: scale(200), height: scale(200)}}
            resizeMode="cover"
            source={asset.fly}
          />
          {this.state.uploading ? (
            <View style={{marginTop: 20}}>
              <Progress.Bar progress={this.state.transferred} width={300} />
            </View>
          ) : (
            <ButtonTab title="Upload the picture" onPress={this.uploadImage} />
          )}
          <ButtonTab title="Upload myself" onPress={this.uploadImage} />
          <ButtonTab
            title="Upload Info"
            // onPress={this.uploadImage}
          />
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = (state) => ({
  dataImg: state.dataImg,
  dataOne: state.dataOne,
  dataTwo: state.dataTwo,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Upload);
