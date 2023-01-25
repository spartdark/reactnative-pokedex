import React from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImageColors from 'react-native-image-colors';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';
import {useState, useEffect} from 'react';

const windowPhone = Dimensions.get('screen').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
  //color gradiante de mis tarjetas
  const [bgColor, setBgColor] = useState('grey');

  useEffect(() => {
    ImageColors.getColors(pokemon.pokemonPicture, {fallback: 'grey'}).then(
      colors => {
        colors.platform === 'android'
          ? setBgColor(colors.dominant || 'grey')
          : setBgColor(colors.background || 'grey');
      },
    );
    //ios backgroud
    //android color dominante
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View
        style={{
          ...styles.cardContainer,
          width: windowPhone * 0.4,
          backgroundColor: bgColor,
        }}>
        {/* //nombre del pokemon */}
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.pokemonId}
          </Text>
        </View>

        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>
        <FadeInImage
          uri={pokemon.pokemonPicture}
          style={styles.pokemonImage}></FadeInImage>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 150,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -7,
    bottom: -5,
  },
});
