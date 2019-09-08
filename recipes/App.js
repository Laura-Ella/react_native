/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
// import { TabNavigator } from 'react-navigation'
import Recipes from './components/Recipes';

const App = () => {
  return (
    <View>
      <Recipes />
    </View>
  );
};

export default App