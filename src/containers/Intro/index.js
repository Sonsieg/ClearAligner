import React, {Component} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import asset from '../../asset';
import ButtonTab from '../../components/ButtonTab';
import {scale} from '../../components/ScaleSheet';
import styless from '../styless';
export default class Intro extends Component {
  render() {
    return (
      <ImageBackground
        source={asset.background}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            flex: 1,
          }}>
          <View style={styless.viewTab}>
            <Image
              style={{width: scale(250), height: scale(250)}}
              resizeMode="contain"
              source={asset.logo}
            />
          </View>
          <View style={styless.viewBottom}>
            <View style={styless.viewText}>
              <Text
                style={{
                  fontSize: scale(30),
                  color: 'blue',
                }}>
                Welcome
              </Text>
              <Text
                style={{
                  fontSize: scale(20),
                  color: 'grey',
                }}>
                ClearAligner Check will allow you to perfrom a preliminary
                assessment to check if it is possible to align your teeth and
                select the best aligner treatment for you.
              </Text>
              <ButtonTab
                title="Create your first enquiry"
                onPress={() => this.props.navigation.navigate('TabOne')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
