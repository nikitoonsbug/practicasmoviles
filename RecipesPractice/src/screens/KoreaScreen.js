import React, { useState } from 'react';
import { Box, ScrollView, Text, Center } from 'native-base';
import { TabView, SceneMap } from 'react-native-tab-view';
import CardComponent from '../components/CardComponent';

const FirstRoute = () => (
  <Center flex={1} my="4">
    <ScrollView>
      <CardComponent 
        imageUri="https://www.agoda.com/wp-content/uploads/2024/08/Namsan-Tower-during-autumn-in-Seoul-South-Korea.jpg"
        title="Namsan Seoul Tower"
        subtitle="Icono de Seúl"
        description="La Namsan Seoul Tower ofrece una vista panorámica de la ciudad y es uno de los puntos turísticos más visitados de Seúl."
        time="5 mins ago"
      />
      <CardComponent 
        imageUri="https://mochilerosentailandia.com/wp-content/uploads/2019/03/palacio-gyeongbokgung-1024x717.jpg"
        title="Palacio Gyeongbokgung"
        subtitle="Patrimonio histórico"
        description="El Palacio Gyeongbokgung es el principal palacio real de la dinastía Joseon, y un lugar clave para comprender la historia de Corea."
        time="20 mins ago"
      />
    </ScrollView>
  </Center>
);

const SecondRoute = () => (
  <Center flex={1} my="4">
    <ScrollView>
      <CardComponent 
        imageUri="https://upload.wikimedia.org/wikipedia/commons/a/a2/Haeundae_Beach_in_Busan.jpg"
        title="Playa Haeundae"
        subtitle="Destino playero"
        description="La playa Haeundae en Busan es famosa por su arena dorada y las vistas impresionantes del mar de Japón."
        time="10 mins ago"
      />
      <CardComponent 
        imageUri="https://www.koreana.or.kr/upload/editor/20230913164542_kvyrqzrt.png"
        title="Mercado de Jagalchi"
        subtitle="Mercado de mariscos"
        description="El mercado de Jagalchi en Busan es el mercado de mariscos más grande de Corea, donde puedes probar productos frescos directamente del océano."
        time="30 mins ago"
      />
    </ScrollView>
  </Center>
);

const ThirdRoute = () => (
  <Center flex={1} my="4">
    <ScrollView>
      <CardComponent 
        imageUri="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_1998/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ccmalod9wzvdmgptv7sv/Tourdeund%C3%ADaporlaaldeaHanokdeJeonjuyatraccionespopularesdetemporada-KlookEstadosUnidos.jpg"
        title="Aldea Hanok de Jeonju"
        subtitle="Pueblo tradicional"
        description="La Aldea Hanok de Jeonju es famosa por sus casas tradicionales coreanas y su comida típica, especialmente el bibimbap."
        time="1 hour ago"
      />
      <CardComponent 
        imageUri="https://thumbs.dreamstime.com/b/iglesia-cat%C3%B3lica-de-jeondong-situada-cerca-del-pueblo-jeonju-hanok-en-la-ciudad-corea-sur-un-sitio-hist%C3%B3rico-construido-139234494.jpg"
        title="Iglesia Jeondong"
        subtitle="Arquitectura religiosa"
        description="La Iglesia Jeondong en Jeonju es un símbolo de la arquitectura cristiana en Corea, conocida por su hermoso diseño gótico."
        time="2 hours ago"
      />
    </ScrollView>
  </Center>
);

const initialLayout = { width: window.width };

const KoreaScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Seúl' },
    { key: 'second', title: 'Busan' },
    { key: 'third', title: 'Jeonju' },
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

export default KoreaScreen;

