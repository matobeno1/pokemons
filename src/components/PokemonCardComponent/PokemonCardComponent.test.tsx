import { act, create } from "react-test-renderer";
import { PokemonCardComponent } from "./PokemonCardComponent";

describe("PokemonCardComponent", () => {
    it("snapshots", async () => {
        let root: ReturnType<typeof create> | undefined;
        const name = "bulbasaur";
        const href = `/pokemons/${name}`;
        act(() => {
            root = create(
                <PokemonCardComponent
                    name={name}
                    href={href}
                />
            );
        });
        expect(root?.toJSON()).toMatchSnapshot();
    });
});
