/* importar react  */
import React, { useEffect, useState } from 'react';
/* importamos los componentes de react */
import {view,ActivityIndicator} from 'react-native';
/* Importamso NativeBase */
import {Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider } from "native-base";


const  HomeScreen = () =>{
  /* loading */
  const [isLoading, setLoading] = useState(true);

  /* declaramos nuestro statda date en un state vacio  */
  const [data, setData] = useState([]);
  /* Funcion para obtener en la fake api las movies */
  const getMovies = async () => {
    try {
     //const response = await fetch('https://reactnative.dev/movies.json');
     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }
 /* inicializamos nuestro useEffect */
 useEffect(() => {
  getMovies();
}, []);

    return(

<NativeBaseProvider>
   <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Inbox
      </Heading>
      <FlatList data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "muted.50"
    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar size="68px" source={{
          uri: item.title
        }} />
              <VStack>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item.title}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  {item.body}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.id}
              </Text>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Box>
    </NativeBaseProvider>
    );
};

export default HomeScreen;
