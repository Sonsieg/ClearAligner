import React, {Component} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import asset from '../../asset';
import ButtonTab from '../../components/ButtonTab';
import InputText from '../../components/InputText';
import {scale} from '../../components/ScaleSheet';
import Top from '../../components/Top';

export default class InfoTwo extends Component {
  render() {
    return (
      <ImageBackground
        source={asset.background}
        style={{width: '100%', height: '100%'}}>
        <Top
          title="Patient information 1/2"
          onPress={() => this.props.navigation.goBack()}
        />
        <ScrollView
          style={{marginHorizontal: scale(20)}}
          showsVerticalScrollIndicator={false}>
          <InputText title="DENTIST NAME" secureTextEntry={false} />
          <InputText title="PRACTICE NAME" secureTextEntry={false} />
          <InputText title="PRACTICE ADDRESS" secureTextEntry={false} />
          <InputText title="YOUR ADDRESS" secureTextEntry={false} />
          <InputText title="POSTCODE" secureTextEntry={false} />
          <InputText title="TELEPHONE" secureTextEntry={false} />
          <InputText title="YOUR EMAIL" secureTextEntry={false} />
          <Text
            style={{
              fontSize: scale(14),
              fontWeight: 'bold',
              marginVertical: scale(12)
            }}>
            **This app is for visual assesssment only
          </Text>
          <ButtonTab title="Next" onPress={()=>this.props.navigation.navigate('Send')}/>
        </ScrollView>
      </ImageBackground>
    );
  }
}
