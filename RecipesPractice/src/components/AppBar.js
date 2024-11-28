import React from 'react';
import { Button, HStack, VStack, Text } from 'native-base';
import { DrawerActions } from '@react-navigation/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const AppBar = ({ navigation }) => {
  return (
    <VStack height="100%">
        <VStack height="18%">
            <HStack justifyContent="space-between" alignItems="center" px="4" py="50" bg="primary.500">
            <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} transparent>
                <FontAwesome6 name="bars" size={30} color="white" />
            </Button>
            <Text color="white" fontSize="30" bold>
                App Turismo
            </Text>
            <Button transparent>
                <FontAwesome6 name="plane-departure" size={40} color="white" />
            </Button>
            </HStack>
        </VStack>
        <VStack height="82%"  background='amber.100'>
            <VStack height="30%" justifyContent="space-evenly"> 
                <HStack>
                    <Button onPress={() => navigation.navigate('Japan')} bg="primary.800" flex="1" justifyContent="center" alignItems="center" _text={{ color: 'white' }}>
                        Japan
                    </Button>            
                </HStack>
                <HStack>
                    <Button onPress={() => navigation.navigate('Korea')} bg="primary.800" flex="1" justifyContent="center" alignItems="center" _text={{ color: 'white' }}>
                        South Korea
                    </Button>
                </HStack>
                <HStack>
                    <Button onPress={() => navigation.navigate('Destinations')} bg="primary.800" flex="1" justifyContent="center" alignItems="center" _text={{ color: 'white' }}>
                        Destinations
                    </Button>
                </HStack>
            </VStack>    
        </VStack>
    </VStack>    
  );
};

export default AppBar;