export type FetchPokemonsRequestResponseType = Readonly<{
    results: Array<{
        name: string,
        url: string
    }>
}>;

export type FetchPokemonRequestResponseType = {
    id: string;
    name: string;
    color: {
        name: string
    },
};

export type FetchPokemonDetailsRequestResponseType = {
    height: number;
    weight: number;
};
