import React, {Component} from 'react';
import {Alert, ImageBackground, ScrollView, Text, View} from 'react-native';
import asset from '../../asset';
import ButtonTab from '../../components/ButtonTab';
import InputText from '../../components/InputText';
import {scale} from '../../components/ScaleSheet';
import Top from '../../components/Top';
import {checkPhone, checkValidMail} from '../../utils/validate';
import {setSaveInfoTwoAction} from '../../store/action/index';
import { connect } from 'react-redux';

class InfoTwo extends Component {
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
  validateFied = (youAdresss, telephone, yourEmail) => {
    if (youAdresss === '' || telephone === '' || yourEmail === '') {
      Alert.alert(
        'Thông báo',
        `Vui lòng điền đầy đủ thông tin`,
        [{text: 'Đồng ý'}],
        {cancelable: false},
      );
      return false;
    }
    let errorEmail = checkValidMail(yourEmail);
    let errorPhone = checkPhone(telephone);
    if (errorEmail || errorPhone) {
      Alert.alert(
        'Thông báo ',
        `${errorEmail || errorPhone}.Vui lòng thử lại`,
        [{text: 'Đồng ý'}],
        {cancelable: false},
      );
      return false;
    }
    if (!errorEmail && !errorPhone) return true;
  };
  goSend = () => {
    let infoInput = {};
    let check = this.validateFied(
      this.state.youAdresss,
      this.state.telephone,
      this.state.yourEmail,
    );
    console.log(check);
    if (check) {
      infoInput = {...this.state};
      // console.log('object', infoInput);
      this.props.navigation.navigate('Send');
      this.props.setSaveInfoTwoAction(infoInput);
    }
  };
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
          <InputText
            title="DENTIST NAME"
            secureTextEntry={false}
            value={this.state.dentist}
            onChangeText={(value) => {
              this.setState({dentist: value});
            }}
          />
          <InputText
            title="PRACTICE NAME"
            secureTextEntry={false}
            value={this.state.praticeName}
            onChangeText={(value) => {
              this.setState({praticeName: value});
            }}
          />
          <InputText
            title="PRACTICE ADDRESS"
            secureTextEntry={false}
            value={this.state.praticeAdress}
            onChangeText={(value) => {
              this.setState({praticeAdress: value});
            }}
          />
          <InputText
            title="YOUR ADDRESS"
            secureTextEntry={false}
            value={this.state.youAdresss}
            onChangeText={(value) => {
              this.setState({youAdresss: value});
            }}
          />
          <InputText
            title="POSTCODE"
            secureTextEntry={false}
            value={this.state.postCode}
            onChangeText={(value) => {
              this.setState({postCode: value});
            }}
          />
          <InputText
            title="TELEPHONE"
            secureTextEntry={false}
            value={this.state.telephone}
            onChangeText={(value) => {
              this.setState({telephone: value});
            }}
          />
          <InputText
            title="YOUR EMAIL"
            secureTextEntry={false}
            value={this.state.yourEmail}
            onChangeText={(value) => {
              this.setState({yourEmail: value});
            }}
          />
          <Text
            style={{
              fontSize: scale(14),
              fontWeight: 'bold',
              marginVertical: scale(12),
            }}>
            **This app is for visual assesssment only
          </Text>
          <ButtonTab title="Next" onPress={this.goSend} />
        </ScrollView>
      </ImageBackground>
    );
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  setSaveInfoTwoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoTwo);
