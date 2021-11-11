import { Pokemon } from "../types";

export type FetchPokemonsRequestResponseType = Readonly<{
    results: Array<{
        name: string,
        url: string
    }>
}>;

export type FetchPokemonRequestResponseType = Pokemon;
