import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {scale} from '../ScaleSheet';
import styles from '../styles';

export class InputText extends Component {
  render() {
    const {secureTextEntry, onChangeText, value} = this.props;
    return (
      <View style={styles.textinputView}>
        <Text style={{fontSize: scale(16), marginBottom: scale(10)}}>
          {this.props.title}
        </Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.textinput}
          secureTextEntry={secureTextEntry}
          fontSize={scale(14)}
          placeholder="Enter"
        />
      </View>
    );
  }
}
export default InputText;
