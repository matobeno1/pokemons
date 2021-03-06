import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { fetchPokemonRequest } from "@src/requests";
import { createClassNames } from "@src/bem";
import { APP_TITLE, POKEMONS_PRELOAD_COUNT } from "@src/constants";
import { PokemonCardComponent } from "@src/components";
import { Pokemon } from "@src/types";
import { getSpriteUrl } from "@src/utils";

const classes = createClassNames("home-page");

type HomePageProps = {
    /** Pokemon names. */
    pokemons: Pokemon[];
};

const Home: NextPage<HomePageProps> = ({
    pokemons,
}) => (
    <div>
        <Head>
            <title>{APP_TITLE}</title>
        </Head>
        <div className={classes()}>
            <h1 className={classes("title")}>Pokédex</h1>
            <div className={classes("listing")}>
                {pokemons.map(pokemon => (
                    <PokemonCardComponent
                        key={pokemon.name}
                        name={pokemon.name}
                        href={`/pokemon/${pokemon.name}`}
                        imageSrc={getSpriteUrl(pokemon.id)}
                        color={pokemon.color.name}
                    />
                ))}
            </div>
        </div>
    </div>
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const requests = await Promise.all(
        // Creates array of pokemon IDs and fetches data about each pokemon.
        Array.from(Array(POKEMONS_PRELOAD_COUNT).keys()).map((id) => fetchPokemonRequest(id + 1))
    );
    const pokemons: Pokemon[] = requests.map(request => request.data);

    return {
        props: {
            pokemons,
        }
    };
};

export default Home;
