import {useEffect, useRef} from 'react';
import {pokemonAPI} from '../api/pokemonApi';

export const usePokemonPaginated = () => {
  //const baseURL = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=40';

  const nextPageURL = useRef(
    'https://pokeapi.co/api/v2/pokemon?offset=20&limit=40',
  );

  //const nextPageURL = ''
  const loadPokemons = async () => {
    const resp = await pokemonAPI.get(nextPageURL.current);
    console.log(resp.data);
  };

  useEffect(() => {
    loadPokemons();
  }, []);
};
