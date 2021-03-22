import React, {Component} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import asset from '../../asset';
import ButtonTab from '../../components/ButtonTab';
import InputText from '../../components/InputText';
import {scale} from '../../components/ScaleSheet';
import Top from '../../components/Top';

export default class InfoTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dentist: '',
      praticeName: '',
      praticeAdress: '',
      youAdresss: '',
      postCode: '',
      telephone: '',
      yourEmail: '',
    };
  }
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
          <InputText title="DENTIST NAME" secureTextEntry={false} 
          value={this.state.dentist}
          onChangeText={(value) => {
            this.setState({dentist: value});
          }}
          />
          <InputText title="PRACTICE NAME" secureTextEntry={false} 
          value={this.state.praticeName}
          onChangeText={(value) => {
            this.setState({praticeName: value});
          }}
          />
          <InputText title="PRACTICE ADDRESS" secureTextEntry={false} 
          value={this.state.praticeAdress}
          onChangeText={(value) => {
            this.setState({praticeAdress: value});
          }}
          />
          <InputText title="YOUR ADDRESS" secureTextEntry={false} 
          value={this.state.youAdresss}
          onChangeText={(value) => {
            this.setState({youAdresss: value});
          }}
          />
          <InputText title="POSTCODE" secureTextEntry={false} 
          value={this.state.postCode}
          onChangeText={(value) => {
            this.setState({postCode: value});
          }}
          />
          <InputText title="TELEPHONE" secureTextEntry={false} 
          value={this.state.telephone}
          onChangeText={(value) => {
            this.setState({telephone: value});
          }}
          />
          <InputText title="YOUR EMAIL" secureTextEntry={false} 
          value={this.state.yourEmail}
          onChangeText={(value) => {
            this.setState({yourEmail: value});
          }}
          />
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
