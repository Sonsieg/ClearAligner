import React, {Component} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import asset from '../../../asset';
import {scale} from '../../../components/ScaleSheet';
import Top from '../../../components/Top';
import vari from '../../../../theme/variables/platform';
import ButtonTab from '../../../components/ButtonTab';
export default class TabTwo extends Component {
  render() {
    return (
      <ImageBackground
        source={asset.background}
        style={{width: '100%', height: '100%'}}>
        <Top title="Add a new enquiry" />
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
          <TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: (vari.width * 1) / 2,
                backgroundColor: 'white',
                borderWidth: scale(1),
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: scale(18), textAlign: 'center'}}>
                SELECT A PHOTO
              </Text>
            </View>
          </TouchableOpacity>
          <ButtonTab title="Next" />
        </View>
      </ImageBackground>
    );
  }
}
