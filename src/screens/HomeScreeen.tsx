import React from 'react';
import {Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  //destructurar el top del safe area
  const {top} = useSafeAreaInsets();

  return (
    <View>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <Text
        style={{
          //destructuro las propiedades
          //primero las desestructuraciones y luego las modificaciones
          ...styles.globalMargin,
          ...styles.gnralTittle,
          top: top + 20,
        }}>
        Pokedex
      </Text>
    </View>
  );
};
