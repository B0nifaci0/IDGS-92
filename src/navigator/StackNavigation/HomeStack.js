/* importamos react */
import * as React from 'react';
/* importamos librerias de native-stack */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* importamos a nuesto HomeScreen */
import HomeScreen from '../ScreensStack/HomeScreen';
/* Declarar nuestro stack navigator */

const stack = createNativeStackNavigator;

/* Inicialiamos nuestro componente */

export default HomeStack = () =>{
    /*  */

    render(
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component= {HomeScreen}/>
        </Stack.Navigator>
    );
}