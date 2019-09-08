import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import RecipeItem from './RecipeItem';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: 'Polenta',
          cooktime: '35 minutes',
          yield: 4,
        },
        {
          id: 1,
          title: 'Lasagna',
          cooktime: '3 hours',
          yield: 8,
        },
        {
          id: 2,
          title: 'Bistecca Fiorentina',
          cooktime: '1.5 hours',
          yield: 4,
        },
      ],
    };
  }

  _renderItem = ({item}) => (
    <RecipeItem
      id={item.id}
      title={item.title}
      cooktime={item.cooktime}
      yield={item.yield}
    />
  );

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recipes</Text>
        <RecipeItem />
        <FlatList
          data={this.state.recipes}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
  },
});
