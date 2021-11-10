import type { GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import { fetchPokemonsRequest } from "../src/requests";

const PokemonDetailPage: NextPage = () => {
    const router = useRouter();
    const { name } = router.query;
    return (
        <h1>{name}</h1>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await fetchPokemonsRequest(9);
    return {
        paths: data.results.map(({ name }) => ({
            params: {
                name
            }
        })),
        fallback: true,
    };
};

export default PokemonDetailPage;
