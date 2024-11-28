import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Box, Text, Button } from 'native-base';

const destinations = [
  { key: '1', title: 'Tokyo', description: 'Capital of Japan' },
  { key: '2', title: 'Seoul', description: 'Capital of South Korea' },
  { key: '3', title: 'Paris', description: 'City of Light' },
  { key: '4', title: 'Barcelona', description: 'Beautiful Spanish city' },
  // Añadir más destinos aquí...
];

const SwipeList = () => {
  return (
    <SwipeListView
      data={destinations}
      renderItem={({ item }) => (
        <Box>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </Box>
      )}
      renderHiddenItem={() => (
        <Button>
          <Text>Eliminar</Text>
        </Button>
      )}
      leftOpenValue={75}
      rightOpenValue={-75}
    />
  );
};

export default SwipeList;
