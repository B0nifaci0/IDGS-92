/* importar react  */
import React from 'react';
/* importamos los componentes de react */
import {Text,View} from 'react-native';
/* Importamso NativeBase */
import { NativeBaseProvider, Box, Text } from "native-base";


const  HomeScreen = () =>{
    return(
      <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
    );
}

export default HomeScreen;
