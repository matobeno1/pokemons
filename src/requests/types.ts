export type FetchPokemonsRequestResponseType = Readonly<{
    results: Array<{
        name: string,
        url: string
    }>
}>;
