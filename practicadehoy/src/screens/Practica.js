1. npx create-expo-app@latest MyBadgeDivider
2. npm install react-native-paper
3. /app/(tabs)/index.tsx.

Index.tsx

import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Badge, Divider } from 'react-native-paper';  // Importamos Badge y Divider de react-native-paper
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  // Estado para el número del Badge
  const [badgeCount, setBadgeCount] = useState(3);

  // Función para aumentar el número del Badge cuando se hace clic en el botón
  const handleButtonClick = () => {
    setBadgeCount(badgeCount + 1);
  };

  return (
    <ThemedView style={styles.container}>
      {/* Ejemplo de Badge sobre el botón Explore */}
      <ThemedText type="title">Badge</ThemedText>
      <ThemedText>
        El componente Badge se utiliza para mostrar una pequeña etiqueta con un número o texto. Es comúnmente usado para
        notificaciones o para mostrar cantidades.
      </ThemedText>
      
      {/* Botón Explore con Badge */}
      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <ThemedText style={styles.buttonText}>Explore</ThemedText>
        <Badge style={styles.badge}>{badgeCount}</Badge> {/* Badge sobre el botón con número variable */}
      </TouchableOpacity>

      <Divider style={styles.divider} /> {/* Divider para separar los ejemplos */}
      
      {/* Ejemplo de Divider con lista de nombres */}
      <ThemedText type="title">Divider</ThemedText>
      <ThemedText>
        El componente Divider crea una línea divisoria que se utiliza para separar visualmente diferentes secciones de
        contenido.
      </ThemedText>

      {/* Lista de nombres con Divider */}
      <ThemedText type="title>Lista de nombres:</ThemedText>
      <ThemedView style={styles.listContainer}>
        <ThemedText>Salmerón Rodríguez Jonathan Alexis – 20151671</ThemedText>
        <Divider style={styles.divider} />
        <ThemedText>Cardona Zúñiga Yahaira Viviana – 19150308</ThemedText>
        <Divider style={styles.divider} />
        <ThemedText>Ruvalcaba Brayan Sebastián – 19150358</ThemedText>
        <Divider style={styles.divider} />
        <ThemedText>Espinosa Martínez Antonio Alejandro – 19151676</ThemedText>
        <Divider style={styles.divider} />
        <ThemedText>García García Oscar Adrían - 19150345</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  badge: {
    backgroundColor: '#6200ee',
    color: 'white',
    position: 'absolute',
    top: -15,
    right: -15,
    fontSize: 20, // Hacemos el badge más grande
    minWidth: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 8, // Hacemos el botón más pequeño
    paddingHorizontal: 15,
    borderRadius: 5,
    position: 'relative',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16, // Hacemos el texto del botón un poco más pequeño
  },
  listContainer: {
    marginVertical: 20,
  },
  divider: {
    marginVertical: 10,
    backgroundColor: '#ddd',
  },
});