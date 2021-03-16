/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  ScrollView,
  Image,
  Text,
  Dimensions,
  StyleSheet, 
  FlatList
} from 'react-native';

const width_device = Dimensions.get("screen").width
const Informacoes = [
  {usuario: "Bruno"},
  {usuario: "Jennifer"},
  {usuario: "Lucas"},
]

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={Informacoes}
          renderItem={({item}) =>
            <Fragment>
              <Text>{item.usuario}</Text>
              <Image source={require("./src/img/alura.jpg")}
                style={estilo.imagem}
              />
            </Fragment>
          }
      />
    </ScrollView>
  );
};

const estilo = StyleSheet.create({
  imagem:{
    width: width_device,
    height: width_device
  }
})

export default App;
