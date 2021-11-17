import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import type { Pokemon } from "@src/types";
import { fetchPokemonRequest, fetchPokemonsRequest } from "@src/requests";
import { INTEGER_REGEX, POKEMONS_PRELOAD_COUNT } from "@src/constants";
import { PokemonDetailComponent, LoaderComponent } from "@src/components";
import { NextPageWithLayout } from "@src/types";
import { navigationLayout } from "@src/layouts";

type PokemonDetailPageProps = {
    pokemon: Pokemon | null;
};
type PokemonDetailPageUrlQuery = {
    /** Unique name of the pokemon. */
    name: string
};

const PokemonDetailPage: NextPageWithLayout<PokemonDetailPageProps> = ({
    pokemon
}) => pokemon ? (
    <>
        <Head >
            <title>{pokemon.name}</title>
            <style>
                {`:root {--html-background-color: ${pokemon.color.name === "white" ? "gray" : pokemon.color.name ?? "gray"} !important;}`}
            </style>
        </Head>
        <PokemonDetailComponent pokemon={pokemon} />
    </>
) : <LoaderComponent />;

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

PokemonDetailPage.getLayout = navigationLayout;

export default PokemonDetailPage;
