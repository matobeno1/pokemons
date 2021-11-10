import type { NextPage, GetStaticProps } from "next"

type HomePageProps = {
    pokemons: string[];
}

const Home: NextPage<HomePageProps> = () => (
    <div>
      <h1>Pokemons</h1>
    </div>
)

export const getStaticProps: GetStaticProps = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
        .then(res => res.json())
}

export default Home
