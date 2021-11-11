import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { fetchPokemonRequest } from "../../src/requests";

const INT_REGEX = /^\d+$/;

export const middleware = async (req: NextRequest) => {
    const { params } = req.page;
    const name = params?.name;
    if (name && INT_REGEX.test(name)) {
        try {
            const { data: pokemon } = await fetchPokemonRequest(name);
            console.log("redir");
            return NextResponse.redirect(`/pokemon/${pokemon.name}`);
        } catch (e) {
            console.error(e);
            NextResponse.rewrite("/404");
        }
    }
    return NextResponse.next();
};
