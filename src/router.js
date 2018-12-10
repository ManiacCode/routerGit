import React, { Component } from 'react';
import { StackNavigator, createStackNavigator, createBottomTabNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './screens/Home';
import AddItem from './screens/AddItem';
import ListItem from './screens/ListItem';

export const Tabs = createBottomTabNavigator({
  'AddItem': {
    screen: AddItem,
    navigationOptions:{
      tabBarLabel: 'Add Item',
      tabBarIcon: ({ tintColor }) => <Icon name="plus" type="font-awesome" size={28} color={tintColor} />
    }
  },
  'Home': {
    screen: Home,
    navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" type="font-awesome" size={28} color={tintColor} />
    }
  },
  'ListItem': {
    screen: ListItem,
    navigationOptions:{
      tabBarLabel: 'List Item',
      tabBarIcon: ({ tintColor }) => <Icon name="plus" type="font-awesome" size={28} color={tintColor} />
    }
  }
});

export const createRootNavigator = () => {
  return createStackNavigator({
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  });
};