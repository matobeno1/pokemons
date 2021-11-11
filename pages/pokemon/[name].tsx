import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { fetchPokemonRequest, fetchPokemonsRequest } from "@src/requests";
import type { Pokemon } from "@src/types";
import { INTEGER_REGEX, POKEMONS_PRELOAD_COUNT } from "@src/constants";

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
    const colorName = pokemon?.color.name;
    return pokemon ? (
        <div style={{ backgroundColor: colorName }}>
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
    const { data } = await fetchPokemonsRequest(POKEMONS_PRELOAD_COUNT);
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
    const { name } = params;
    try {
        const { data: pokemon } = await fetchPokemonRequest(name);
        return name && INTEGER_REGEX.test(name) ? ({
            redirect: {
                permanent: true,
                destination: `/pokemon/${pokemon.name}`
            }
        }) : ({
            props: {
                pokemon
            },
            revalidate: false
        });
    } catch (e) {
        return { notFound: true };
    }
};

export default PokemonDetailPage;
