import React, {Component} from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles';

export class ButtonTab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.touch}>
        {!this.props.loading ? (
          <Text style={styles.text}>{this.props.title}</Text>
        ) : (
          <ActivityIndicator size="small" color="white" />
        )}
      </TouchableOpacity>
    );
  }
}
export default ButtonTab;