import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {scale} from '../ScaleSheet';

export class InputText extends Component {
  render() {
    const {secureTextEntry, onChangeText, value} = this.props;
    return (
      <View style={{width: '100%', height: scale(70),marginVertical: scale(18)}}>
        <Text
          style={{fontSize: scale(16),  marginBottom:scale(10)}}>
          {this.props.title}
        </Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={{
            width: '100%',
            height: scale(50),
            // borderWidth: 1,
            color: 'blue',
            backgroundColor:"white",
            borderRadius: 5,
          }}
          secureTextEntry={secureTextEntry}
          fontSize={scale(14)}
          placeholder="Enter"
        />
      </View>
    );
  }
}
export default InputText;
