import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class RecipeItem extends Component {
  render() {
    return (
      <View>
        <Text>Title: {this.props.title}</Text>
        <Text>Cooktime: {this.props.cooktime}</Text>
        <Text>Yield: {this.props.yield}</Text>
      </View>
    );
  }
}
