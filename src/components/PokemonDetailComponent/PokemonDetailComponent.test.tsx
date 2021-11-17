import { act, create } from "react-test-renderer";
import { PokemonDetailComponent } from "./PokemonDetailComponent";
import { Pokemon } from "../../types";

describe(PokemonDetailComponent, () => {
    it("snapshots", async () => {
        let root: ReturnType<typeof create> | undefined;
        const pokemon: Pokemon = {
            id: "1",
            name: "bulbasaur",
            weight: 50,
            height: 50,
            color: {
                name: "green"
            }
        };
        act(() => {
            root = create(<PokemonDetailComponent pokemon={pokemon} />);
        });
        expect(root?.toJSON()).toMatchSnapshot();
    });
});
