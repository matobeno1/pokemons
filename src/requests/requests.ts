import { FetchPokemonsRequestResponseType } from "./types";

export const fetchPokemonsRequest = (limit: number, offset = 0) => (
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offest=${offset}`)
        .then<FetchPokemonsRequestResponseType>(res => res.json())
);
