import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JapanScreen from '../screens/JapanScreen';
import KoreaScreen from '../screens/KoreaScreen';
import DestinationsScreen from '../screens/DestinationsScreen';
import { Icon } from 'native-base';
import AppBar from '../components/AppBar';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Japan"
      drawerContent={(props) => <AppBar {...props} />}
    >
      <Drawer.Screen name="Japan" component={JapanScreen} />
      <Drawer.Screen name="Korea" component={KoreaScreen} />
      <Drawer.Screen name="Destinations" component={DestinationsScreen} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
