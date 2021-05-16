import React, {Component} from 'react';
import {Image, ImageBackground, Linking, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import asset from '../../asset';
import {scale} from '../../components/ScaleSheet';
import styless from '../styless';

export default class Send extends Component {
  render() {
    return (
      <ImageBackground
        source={asset.backgroundend}
        style={{width: '100%', height: '100%'}}>
        <View style={styless.viewSend}>
          <Image
            style={{width: scale(400), height: scale(200)}}
            resizeMode="contain"
            source={asset.font}
          />
          <Image
            style={{width: scale(200), height: scale(200)}}
            resizeMode="cover"
            source={asset.fly}
          />
        </View>
        <View style={{marginHorizontal: scale(20)}}>
          <Text style={styless.viewSucces}>Successfully sent</Text>
          <Text style={styless.textSupport}>
            For any help or support, please message us
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('mailto:ssthieugiass@gmail.com')}
            style={styless.touchLinking}>
            <Text style={styless.textLink}>Send Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Intro')}
            style={styless.touchBack}>
            <Text style={styless.textSubmit}>Submit another case</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
