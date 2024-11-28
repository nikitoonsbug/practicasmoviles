import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Usaremos Ionicons para el ícono del menú
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer
      screenOptions={({ navigation }) => ({
        drawerActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: true, // Mostramos el encabezado superior
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="menu" size={24} color={Colors[colorScheme ?? 'dark'].text} />
          </Pressable>
        ),
      })}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: 'Home',
          drawerIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="explore"
        options={{
          title: 'Explore',
          drawerIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}

