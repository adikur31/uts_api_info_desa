import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './Home';
import DetailScreen from './Detail';

const Stack1 = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: (
        <View style={{ paddingLeft: 21 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={27} />
          </TouchableOpacity>
        </View>
      ),
    }),
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Detail',
    }),
  },
});

export default DrawerNavigator({
  Home: {
    screen: Stack1,
  },
});
