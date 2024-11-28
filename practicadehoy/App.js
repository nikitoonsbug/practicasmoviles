import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NativeBaseProvider } from 'native-base';

import ConfigScreen from './src/screens/ConfigScreen.js';
import Competencias from './src/screens/Competencias.js';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Competencias">
          <Drawer.Screen name="Competencias" component={Competencias} />
          <Drawer.Screen name="Config" component={ConfigScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};