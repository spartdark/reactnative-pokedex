import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {styles} from '../theme/appTheme';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FlatList} from 'react-native-gesture-handler';
import {pokemonAPI} from '../api/pokemonApi';
import {FadeInImage} from '../components/FadeInImage';
import {PokemonCard} from '../components/PokemonCard';

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
        numColumns={2}
        //Header
        ListHeaderComponent={
          <Text
            style={{
              //destructuro las propiedades
              //primero las desestructuraciones y luego las modificaciones
              ...styles.globalMargin,
              ...styles.gnralTittle,
              top: top + 20,
              marginBottom: top + 20,
            }}>
            Pokedex
          </Text>
        }
        //renderItem={({item}) => <Text>{item.name}</Text>}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        //infinite Scrool
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={20} color="grey" />
        }
      />
    </View>
  );
};
