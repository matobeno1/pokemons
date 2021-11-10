import type { NextPage, GetStaticProps } from "next"

import { fetchPokemonsRequest } from "../src/requests";

type HomePageProps = {
    pokemons: string[];
}

const Home: NextPage<HomePageProps> = ({
    pokemons,
}) => (
    <div>
      <h1>Pokemons</h1>
        {pokemons.map(pokemon => (
            <div key={pokemon}>{pokemon}</div>
        ))}
    </div>
)

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
    // TODO env limit 9
    const { results } = await fetchPokemonsRequest(9)
    return {
        props: {
            pokemons: results.map(({ name }) => name)
        }
    }
}

export default Home
