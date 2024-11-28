import React, { useState } from 'react';
import { NativeBaseProvider, Box, Text, VStack, FormControl, Input, Button, Center, Link } from 'native-base';

export default function RegisterScreen({ onRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        console.log("Email:", email);
        console.log("Password:", password);
        onRegister(); // Llama a la función pasada por props para cambiar el_estado de autenticación
    };

    return (    
        <Center flex={1} px="3">    
            <Box safeArea p="2" py="8" w="90%" maxW="290" mx="auto">    
                <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb="4">    
                    Bienvenido    
                </Text>    
                <VStack space={3} mt="5">  
                    
                    <FormControl>    
                        <FormControl.Label>Correo Electrónico</FormControl.Label>    
                        <Input    
                            placeholder="Ingresa tu correo"    
                            value={email}    
                            onChangeText={text => setEmail(text)}    
                            keyboardType="email-address"    
                        />    
                    </FormControl>  
                    <FormControl>
                        <FormControl.Label>Name</FormControl.Label>  
                        <Input
                            placeholder="Ingresa tu nombre"
                            value={name}
                            onChangeText={text => setName(text)}
                        />
                    </FormControl>
                    <FormControl>    
                        <FormControl.Label>Contraseña</FormControl.Label>    
                        <Input    
                            placeholder="Ingresa tu contraseña"    
                            value={password}    
                            onChangeText={text => setPassword(text)}    
                            secureTextEntry    
                        />    
                    </FormControl>    
                    <Button onPress={handleRegister}>    
                        Registrate    
                    </Button>    
                </VStack>    
            </Box>    
        </Center>    
    );    
}