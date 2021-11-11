import type { NextPage, GetStaticProps } from "next";

import { fetchPokemonsRequest } from "@src/requests";
import { createClassNames } from "@src/bem";
import { POKEMONS_PRELOAD_COUNT } from "@src/constants";
import { PokemonCardComponent } from "@src/components";

const classes = createClassNames("Home");

type HomePageProps = {
    /** Pokemon names. */
    pokemonNames: string[];
};

const Home: NextPage<HomePageProps> = ({
    pokemonNames,
}) => (
    <div className={classes()}>
      <h1 className={classes("title")}>Pokemons</h1>
        {pokemonNames.map(pokemon => (
            <PokemonCardComponent
                key={pokemon}
                name={pokemon}
                href={`/pokemon/${pokemon}`}
            />
        ))}
    </div>
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const { data } = await fetchPokemonsRequest(POKEMONS_PRELOAD_COUNT);
    return {
        props: {
            pokemonNames: data.results.map(({ name }) => name)
        }
    };
};

export default Home;
