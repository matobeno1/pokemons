import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";

import { fetchPokemonsRequest } from "@src/requests";

type HomePageProps = {
    /** Pokemon names. */
    pokemons: string[];
};

const Home: NextPage<HomePageProps> = ({
    pokemons,
}) => (
    <div>
      <h1>Pokemons</h1>
        {pokemons.map(pokemon => (
            <div key={pokemon} >
                <Link href={`/pokemon/${pokemon}`}>{pokemon}</Link>
            </div>
        ))}
    </div>
);

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    // TODO env limit 9
    const { data } = await fetchPokemonsRequest(9);
    return {
        props: {
            pokemons: data.results.map(({ name }) => name)
        }
    };
};

export default Home;
