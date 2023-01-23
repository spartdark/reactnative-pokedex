import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {pokemonAPI} from '../api/pokemonApi';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

const windowPhone = Dimensions.get('screen').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View
        style={{
          ...styles.cardContainer,
          width: windowPhone * 0.4,
        }}>
        {/* //nombre del pokemon */}
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.pokemonId}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'red',
    height: 120,
    width: 150,
    marginBottom: 25,
    borderRadius: 10,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
});
