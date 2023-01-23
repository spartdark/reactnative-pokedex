import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {styles} from '../theme/appTheme';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FlatList} from 'react-native-gesture-handler';
import {pokemonAPI} from '../api/pokemonApi';
import {FadeInImage} from '../components/FadeInImage';

export const HomeScreen = () => {
  //destructurar el top del safe area
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  console.log(`HomeScreen() => ${simplePokemonList}`);

  return (
    <View>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemonAPI => pokemonAPI.pokemonId}
        showsVerticalScrollIndicator={false}
        //renderItem={({item}) => <Text>{item.name}</Text>}
        renderItem={({item}) => (
          <FadeInImage
            uri={item.pokemonPicture}
            //source={{uri: item.pokemonPicture}}
            style={{
              width: 100,
              height: 100,
            }}></FadeInImage>
        )}
        //infinite Scrool
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        }
      />
      {/* <Text
        style={{
          //destructuro las propiedades
          //primero las desestructuraciones y luego las modificaciones
          ...styles.globalMargin,
          ...styles.gnralTittle,
          top: top + 20,
        }}>
        Pokedex
      </Text> */}
    </View>
  );
};
