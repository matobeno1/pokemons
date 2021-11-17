import Axios from "axios";

import {
    FetchPokemonDetailsRequestResponseType,
    FetchPokemonRequestResponseType,
    FetchPokemonsRequestResponseType
} from "./types";

/** Axios instance with configured API root. */
const axios = Axios.create({
    baseURL: process.env.API_ROOT,
});

/**
 * Fetches brief information (name, id) about multiple pokemons.
 * @param limit Amount of pokemons to load.
 * @param offset Resource offset.
 */
export const fetchPokemonsRequest = (limit: number, offset = 0) => (
    axios.get<FetchPokemonsRequestResponseType>("pokemon-species",{
        params: {
            limit,
            offset,
        }
    })
);

/**
 * Fetches information about single pokemon, especially it's color.
 * @param id A pokemon id - either name or numerical id.
 */
export const fetchPokemonRequest = (id: string | number) => (
    axios.get<FetchPokemonRequestResponseType>(`pokemon-species/${id}`)
);

/**
 * Fetches detailed information about pokemon.
 * @param id A pokemon id - either name or numerical id.
 */
export const fetchPokemonDetailsRequest = (id: string | number) => (
    axios.get<FetchPokemonDetailsRequestResponseType>(`pokemon/${id}`)
);
