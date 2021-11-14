import type { NextPage, GetStaticProps } from "next";

import { fetchPokemonsRequest } from "@src/requests";
import { createClassNames } from "@src/bem";
import { POKEMONS_PRELOAD_COUNT } from "@src/constants";
import { PokemonCardComponent } from "@src/components";
import { Pokemon } from "@src/types";
import { getSpriteUrl } from "@src/utils";

const classes = createClassNames("home-page");

type PokemonObjectType = Pick<Pokemon, "name"> & {
    id: number
};

type HomePageProps = {
    /** Pokemon names. */
    pokemons: PokemonObjectType[];
};

const Home: NextPage<HomePageProps> = ({
    pokemons,
}) => (
    <div className={classes()}>
        <h1 className={classes("title")}>Pokedex</h1>
        <div className={classes("listing")}>
            {pokemons.map(pokemon => (
                <PokemonCardComponent
                    key={pokemon.name}
                    name={pokemon.name}
                    href={`/pokemon/${pokemon.name}`}
                    imageSrc={getSpriteUrl(pokemon.id)}
                />
            ))}
        </div>
    </div>
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    const { data } = await fetchPokemonsRequest(POKEMONS_PRELOAD_COUNT);
    return {
        props: {
            pokemons: data.results.map(({ name }, i) => ({
                name,
                id: i + 1
            }))
        }
    };
};

export default Home;
