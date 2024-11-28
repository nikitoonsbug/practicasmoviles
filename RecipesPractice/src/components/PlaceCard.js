import React from 'react';
import { Card, Text, Button, Icon } from 'native-base';

const PlaceCard = ({ title, description }) => {
  return (
    <Card style={{ margin: 10 }}>
      <Text bold>{title}</Text>
      <Text>{description}</Text>
      <Button transparent>
        <Icon name="arrow-forward" />
      </Button>
    </Card>
  );
};

export default PlaceCard;
