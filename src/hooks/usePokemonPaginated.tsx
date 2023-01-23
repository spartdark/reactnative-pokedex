import {useEffect, useRef, useState} from 'react';
import {pokemonAPI} from '../api/pokemonApi';
import {
  PokemonResponse,
  SimplePokemon,
  Result,
} from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );
  const nextPageURL = useRef(
    'https://pokeapi.co/api/v2/pokemon?offset=20&limit=40',
  );

  //const nextPageURL = ''
  const loadPokemons = async () => {
    setIsLoading(true);
    const resp = await pokemonAPI.get<PokemonResponse>(nextPageURL.current);
    console.log(resp.data);
    //uso el useRef para actualizar la siguiente url a consumir
    nextPageURL.current = resp.data.next;
    //obtengo los resultados de la peticion http
    mapPokemonList(resp.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    //pokemonList.forEach(myPokemon => console.log(myPokemon));
    const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');
      const pokemonId = urlParts[urlParts.length - 2];
      const pokemonPicture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

      return {pokemonId, pokemonPicture, name};
    });
    //acumulo los pokemones anteriores mas los nuevos
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemonList,
    isLoading,
    loadPokemons,
  };
};
