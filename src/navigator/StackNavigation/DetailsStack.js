/* importamos react */
import * as React from 'react';
/* importamos librerias de native-stack */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* importamos a nuesto Detailscreen */
import Detailscreen from '../ScreensStack/DetailsScreen';
/* Declarar nuestro stack navigator */

const stack = createNativeStackNavigator;

/* Inicialiamos nuestro componente */

export default DetailsStack = () =>{
    /*  */

    render(
        <Stack.Navigator>
            <Stack.Screen name="Detalles" component= {Detailscreen}/>
        </Stack.Navigator>
    );
}