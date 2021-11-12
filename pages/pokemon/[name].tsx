import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { Pokemon } from "@src/types";
import { fetchPokemonRequest, fetchPokemonsRequest } from "@src/requests";
import { INTEGER_REGEX, POKEMONS_PRELOAD_COUNT, SPRITES_ROOT } from "@src/constants";
import { createClassNames } from "@src/bem";
import { getSpriteUrl } from "@src/utils";

type PokemonDetailPageProps = {
    pokemon: Pokemon | null;
};
type PokemonDetailPageUrlQuery = {
    /** Unique name of the pokemon. */
    name: string
};

const classNames = createClassNames("pokemon-name-page");

const PokemonDetailPage: NextPage<PokemonDetailPageProps> = ({
    pokemon
}) => {
    const colorName = pokemon?.color.name;
    return pokemon ? (
        <div className={classNames()} >
            <div className={classNames("backdrop")} style={{ backgroundColor: colorName }} />
            <div>
                <h1>{pokemon.name}</h1>
                <img src={getSpriteUrl(pokemon.id)} alt=""/>
                <pre>
                {pokemon.id}
            </pre>
            </div>
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
