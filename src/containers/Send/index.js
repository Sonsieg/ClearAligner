import React, {Component} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import asset from '../../asset';
import {scale} from '../../components/ScaleSheet';

export default class Send extends Component {
  render() {
    return (
      <ImageBackground
        source={asset.backgroundend}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: scale(20),
          }}>
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
          <Text
            style={{
              fontSize: scale(26),
              textAlign: 'center',
              color: 'white',
              marginVertical: scale(10),
              fontWeight: 'bold',
            }}>
            Successfully sent
          </Text>
          <Text
            style={{fontSize: scale(16), textAlign: 'center', color: 'white', marginVertical:scale(20)}}>
            For any help or support, please message us
          </Text>
          <TouchableOpacity
        //   onPress={}
            style={{
              width: '100%',
              height: scale(50),
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: scale(40)
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: scale(18),
                textAlign: 'center',
              }}>
              Send Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('Intro')}
            style={{
              width: '100%',
              height: scale(50),
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: scale(40),
              marginVertical:scale(20)
            }}>
            <Text
              style={{
                color: 'dodgerblue',
                fontSize: scale(18),
                textAlign: 'center',
              }}>
              Submit another case
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
