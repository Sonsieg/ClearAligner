import React, {Component} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
import asset from '../../asset';
import ButtonTab from '../../components/ButtonTab';
import {scale} from '../../components/ScaleSheet';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import * as Progress from 'react-native-progress';
import {connect} from 'react-redux';
import styless from '../styless';
class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      uploading: false,
      transferred: 0,
      data: {},
    };
  }
  componentDidMount() {
    const {dataOne, dataTwo} = this.props;
    var date = new Date();
    dataTwo.time = `${date}`;
    const returnedTarget = Object.assign(dataOne, dataTwo);
    this.setState({data: returnedTarget});
  }
  uploadImage = async (i) => {
    const {dataImg} = this.props;
    const {uri} = dataImg[i];
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = uri;
    this.setState({uploading: true});
    this.setState({transferred: 0});
    const task = storage().ref(filename).putFile(uploadUri);
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
  };
  upImageData = async () => {
    for (let i = 0; i < 8; i++) {
      this.uploadImage(i);
    }
    console.log('up photo');
  };
  uploadData = () => {
    this.upImageData();
    firestore()
      .collection('ClearAligent')
      .add(this.state.data)
      .then(() => {
        console.log('upload data');
        Alert.alert('Continue', 'Home or email ?', [
          {
            text: 'Home',
            onPress: () => this.props.navigation.navigate('Intro'),
          },
          {
            text: 'Email',
            onPress: () => Linking.openURL('mailto:ssthieugiass@gmail.com'),
          },
        ]);
      });
  };
  render() {
    return (
      <ImageBackground
        source={asset.backgroundend}
        style={{width: '100%', height: '100%'}}>
        <TouchableOpacity
          style={styless.touchUpload}
          onPress={() => this.props.navigation.goBack()}>
          <Image
            resizeMode="center"
            style={styless.touchUpload}
            source={asset.icongoBack}
          />
        </TouchableOpacity>
        <View style={styless.viewUpload}>
          <Image
            style={{width: scale(200), height: scale(200)}}
            resizeMode="cover"
            source={asset.fly}
          />
          <ButtonTab title="Upload Info" onPress={this.uploadData} />
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
