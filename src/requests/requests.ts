import { FetchPokemonRequestResponseType, FetchPokemonsRequestResponseType } from "./types";

// TODO env API ROOT

export const fetchPokemonsRequest = (limit: number, offset = 0) => (
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offest=${offset}`)
        .then<FetchPokemonsRequestResponseType>(res => res.json())
);

export const fetchPokemonRequest = (name: string) => (
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then<FetchPokemonRequestResponseType>(res => res.json())
);
