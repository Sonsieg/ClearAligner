import React, {Component} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import asset from '../../asset';
import ButtonTab from '../../components/ButtonTab';
import InputText from '../../components/InputText';
import {scale} from '../../components/ScaleSheet';
import Top from '../../components/Top';

export default class Info extends Component {
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
          <InputText title="YOUR NAME" secureTextEntry={false} />
          <Text
            style={{
              fontSize: scale(16),
              marginBottom: scale(10),
            }}>
            DATE OF BIRTH
          </Text>
          <TouchableOpacity
            style={{
              width: '100%',
              height: scale(50),
              // borderWidth: 1,
              color: 'blue',
              backgroundColor: 'white',
              borderRadius: 5,
              marginBottom: scale(10),
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: scale(14),
                marginLeft: scale(10),
              }}>
              23/10/1999
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: scale(16),
              marginBottom: scale(10),
            }}>
            GENDER
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                width: '50%',
                height: scale(50),
                // borderWidth: 1,
                color: 'blue',
                backgroundColor: 'white',
                borderRadius: 5,
                marginBottom: scale(10),
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>MALE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '50%',
                height: scale(50),
                // borderWidth: 1,
                color: 'blue',
                backgroundColor: 'white',
                borderRadius: 5,
                marginBottom: scale(10),
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>FEMALE</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: scale(16),
              marginBottom: scale(10),
            }}>
            CASE TYPE
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                width: '33%',
                height: scale(50),
                // borderWidth: 1,
                color: 'blue',
                backgroundColor: 'white',
                borderRadius: 5,
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>UPPER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '33%',
                height: scale(50),
                // borderWidth: 1,
                color: 'blue',
                backgroundColor: 'white',
                borderRadius: 5,
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>LOWER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '33%',
                height: scale(50),
                // borderWidth: 1,
                color: 'blue',
                backgroundColor: 'white',
                borderRadius: 5,
                justifyContent: 'center',
              }}>
              <Text style={{textAlign: 'center'}}>BOTH</Text>
            </TouchableOpacity>
          </View>
          <InputText
            title="WHEN DO YOU WISH WANT YOUR TREATMENT TO COMMENCE"
            secureTextEntry={false}
          />
          <InputText title="REQUIREMENTS" secureTextEntry={false} />
          <InputText
            title="ANY CROWNS, CAP, IMPLANTS?"
            secureTextEntry={false}
          />
          <InputText title="OTHER COMMENTS" secureTextEntry={false} />
          <Text
            style={{
              fontSize: scale(14),
              fontWeight: 'bold',
              marginVertical: scale(12),
            }}>
            **This app is for visual assesssment only
          </Text>
          <ButtonTab title="Next" onPress={()=>this.props.navigation.navigate('InfoTwo')}/>
        </ScrollView>
      </ImageBackground>
    );
  }
}
