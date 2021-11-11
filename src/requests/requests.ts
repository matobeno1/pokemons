import Axios from "axios";

import { FetchPokemonRequestResponseType, FetchPokemonsRequestResponseType } from "./types";

const axios = Axios.create({
    baseURL: process.env.API_ROOT,
});

export const fetchPokemonsRequest = (limit: number, offset = 0) => (
    axios.get<FetchPokemonsRequestResponseType>("pokemon",{
        params: {
            limit,
            offset,
        }
    })
);

export const fetchPokemonRequest = (id: string | number) => (
    axios.get<FetchPokemonRequestResponseType>(`pokemon/${id}`)
);
