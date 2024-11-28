import React, { useState } from 'react';
import { Box, Center, Heading, ScrollView, HStack, Avatar, VStack, Text, Spacer, Pressable, Icon } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';  // Importa la librería SwipeListView
import { Entypo, MaterialIcons } from '@expo/vector-icons';  // Iconos de Entypo y MaterialIcons

function DestinationsScreen() {
  const [mode, setMode] = useState('Basic');
  
  return (
    <Center h="330px" marginTop="50" >
      <Box
        _dark={{ bg: 'coolGray.800' }}
        _light={{ bg: 'white' }}
        flex="1"
        safeAreaTop
        maxW="400px"
        w="100%"
      >
        <Heading p="4" pb="3" size="lg">
          Inbox
        </Heading>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Basic /> 
        </ScrollView>
      </Box>
    </Center>
  );
}

function Basic() {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Tokyo, Japan',
      timeStamp: '24/12/24',
      recentText: 'Pago Exitoso, Disfruta tu viaje!',
      avatarUrl: 'https://cdn2.mediotiempo.com/uploads/media/2021/07/16/bandera-de-japon.jpg'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'Seoul, South Korea',
      timeStamp: '16/11/24',
      recentText: 'Pago Exitoso, Disfruta tus vacaciones!',
      avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/800px-Flag_of_South_Korea.svg.png'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Paris, France',
      timeStamp: '16/04/2022',
      recentText: 'Pago Cancelado.',
      avatarUrl: 'https://fotografias.antena3.com/clipping/cmsimages02/2023/06/14/F2F8570B-14C2-4002-83CE-23606DBE3658/bandera-francia_98.jpg?crop=1259,708,x0,y63&width=1900&height=1069&optimize=low&format=webply'
    },
    {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: 'Palermo, Italy',
      timeStamp: '01/01/2019',
      recentText: 'Pago Exitoso, Disfuta esta experiencia',
      avatarUrl: 'https://static.saltinourhair.com/wp-content/uploads/2023/05/23151527/palermo-sicily-italy-35.jpg'
    },
    {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'London, England',
      timeStamp: '10/02/2016',
      recentText: 'Pago Cancelado',
      avatarUrl: 'https://i.natgeofe.com/n/4def1048-f5e5-4973-ad3a-e188a97d363f/regents-street-london-england_3x2.jpg'
    }
  ];

  const [listData, setListData] = useState(data);

  // Función para cerrar una fila
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  // Función para eliminar una fila
  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.id === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  // Cuando se abre una fila, se loggea
  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  // Renderiza los elementos de la lista
  const renderItem = ({ item, index }) => (
    <Box>
      <Pressable onPress={() => console.log('You touched me')} _dark={{ bg: 'coolGray.800' }} _light={{ bg: 'white' }}>
        <Box pl="4" pr="5" py="2">
          <HStack alignItems="center" space={1}>
            <Avatar size="50px" source={{ uri: item.avatarUrl }} />
            <VStack>
              <Text color="coolGray.800" _dark={{ color: 'warmGray.50' }} bold>
                {item.fullName}
              </Text>
              <Text color="coolGray.600" _dark={{ color: 'warmGray.200' }}>
                {item.recentText}
              </Text>
            </VStack>
            <Spacer />
            <Text fontSize="xs" color="coolGray.800" _dark={{ color: 'warmGray.50' }} alignSelf="flex-start">
              {item.timeStamp}
            </Text>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );

  // Renderiza los elementos ocultos cuando deslizamos
  const renderHiddenItem = (data, rowMap) => (
    <HStack flex="1" pl="2">
      <Pressable
        w="70"
        ml="auto"
        cursor="pointer"
        bg="coolGray.200"
        justifyContent="center"
        onPress={() => closeRow(rowMap, data.item.key)}
        _pressed={{ opacity: 0.5 }}
      >
        <VStack alignItems="center" space={2}>
          <Icon as={<Entypo name="dots-three-horizontal" />} size="xs" color="coolGray.800" />
          <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
            More
          </Text>
        </VStack>
      </Pressable>
      <Pressable
        w="70"
        cursor="pointer"
        bg="red.500"
        justifyContent="center"
        onPress={() => deleteRow(rowMap, data.item.id)}
        _pressed={{ opacity: 0.5 }}
      >
        <VStack alignItems="center" space={2}>
          <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
          <Text color="white" fontSize="xs" fontWeight="medium">
            Delete
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );

  return (
    <Box bg="white" safeArea flex="1">
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-130}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </Box>
  );
}

export default DestinationsScreen;
