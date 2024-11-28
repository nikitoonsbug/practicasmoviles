import React, { useState } from 'react';
import { Box, ScrollView, Text, Center } from 'native-base';
import { TabView, SceneMap } from 'react-native-tab-view';
import CardComponent from '../components/CardComponent';


const FirstRoute = () => (
  <Center flex={1} my="4">
  <ScrollView>
    <CardComponent 
      imageUri="https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/06/Tokyo-Tower--800x500.jpg"
      title="Tokyo Tower"
      subtitle="Icon of Tokyo"
      description="Tokyo Tower is a communications and observation tower located in the Shiba-koen district of Minato, Tokyo."
      time="2 mins ago"
    />
    <CardComponent 
      imageUri="https://miro.medium.com/v2/resize:fit:1400/0*ABlWuKQ0fei7_6ki"
      title="Shibuya Crossing"
      subtitle="Famous Intersection"
      description="Shibuya Crossing is one of the busiest pedestrian crossings in the world, located in the Shibuya district of Tokyo."
      time="10 mins ago"
    />
  </ScrollView>
</Center>
);

const SecondRoute = () => (
  <Center flex={1} my="4">
    <ScrollView>
      <CardComponent 
        imageUri="https://www.jal.co.jp/au/en/guide-to-japan/destinations/articles/kyoto/5-ways-to-explore-bamboo-forest/_jcr_content/root/responsivegrid/sectioncontainer/image_1306044576.coreimg.jpeg/1731044414688.jpeg"
        title="Arashiyama Bamboo Grove"
        subtitle="Bamboo Forest"
        description="The Arashiyama Bamboo Grove is one of the most photographed locations in Japan, a lush bamboo forest in Kyoto."
        time="5 mins ago"
      />
      <CardComponent 
        imageUri="https://es.japantravel.com/photo/poi-40-213932/1200x630/kyoto-fushimi-inari-taisha-213932.jpg"
        title="Fushimi Inari-taisha"
        subtitle="Shinto Shrine"
        description="Fushimi Inari-taisha is an important Shinto shrine in southern Kyoto, famous for its thousands of torii gates."
        time="15 mins ago"
      />
    </ScrollView>
  </Center>
);

const ThirdRoute = () => (
  <Center flex={1} my="4">
    <ScrollView>
      <CardComponent 
        imageUri="https://www.datocms-assets.com/101439/1706776530-osaka-castle.webp?auto=format&fit=max&w=1200"
        title="Osaka Castle"
        subtitle="Historic Site"
        description="Osaka Castle is a famous landmark in Osaka, a symbol of the city's history and culture."
        time="30 mins ago"
      />
      <CardComponent 
        imageUri="https://www.touristjapan.com/wp-content/uploads/2024/07/Dotonbori-1-1024x683.jpg"
        title="Dotonbori"
        subtitle="Entertainment District"
        description="Dotonbori is a popular entertainment area in Osaka, known for its bright lights, street food, and entertainment."
        time="1 hour ago"
      />
    </ScrollView>
  </Center>
);



const initialLayout = { width: window.width };

const JapanScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Tokyo' },
    { key: 'second', title: 'Kioto' },
    { key: 'third', title: 'Osaka' },
    
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
 
  });

  return (
    <Box flex={1}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </Box>
  );
};

export default JapanScreen;
