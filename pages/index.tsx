import type { NextPage, GetStaticProps } from "next"

import {fetchPokemonsRequest} from "../src/requests";

type HomePageProps = {
    pokemons: string[];
}

const Home: NextPage<HomePageProps> = () => (
    <div>
      <h1>Pokemons</h1>
    </div>
)

export const getStaticProps: GetStaticProps = async () => {
    // TODO env limit 9
    const data = await fetchPokemonsRequest(9)
    return {
        props: {

        }
    }
}

export default Home
