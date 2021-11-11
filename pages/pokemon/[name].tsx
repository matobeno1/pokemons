import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { fetchPokemonRequest, fetchPokemonsRequest } from "../../src/requests";
import type { Pokemon } from "../../src/types";

type PokemonDetailPageProps = {
    pokemon: Pokemon | null;
};
type PokemonDetailPageUrlQuery = {
    /** Unique name of the pokemon. */
    name: string
};

const PokemonDetailPage: NextPage<PokemonDetailPageProps> = ({
    pokemon
}) => {
    return pokemon ? (
        <div>
            <h1>{pokemon.name}</h1>
            <pre>
                {pokemon.id}
            </pre>
        </div>
    ) : (
        <div>Loading...</div>
    );
};

export const getStaticPaths: GetStaticPaths<PokemonDetailPageUrlQuery> = async () => {
    const data = await fetchPokemonsRequest(9);
    return {
        paths: data.results.map(({ name }) => ({
            params: {
                name
            }
        })),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<PokemonDetailPageProps, PokemonDetailPageUrlQuery> = async ({ params }) => {
    if (!params) {
        throw new Error("[PokemonDetailPage] No params provided.");
    }
    const pokemon = await fetchPokemonRequest(params.name);
    return {
        props: {
            pokemon
        },
        revalidate: false
    };
};

export default PokemonDetailPage;
