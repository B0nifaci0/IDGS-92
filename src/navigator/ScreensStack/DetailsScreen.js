/* importar react  */
import React from 'react';
/* importamos los componentes de react */
import {Text,View} from 'react-native';


const  DetailsScreen = () =>{
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setings: soy un conponente desde detailsScreen</Text>
      </View>
    );
}

export default DetailsScreen;