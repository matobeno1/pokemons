import { FunctionComponent } from "react";
import Image from "next/image";
import { getSpriteUrl } from "../../utils";
import { Pokemon } from "../../types";
import { createClassNames } from "../../bem";

export type PokemonDetailComponentProps = {
    pokemon: Pokemon;
};

const classNames = createClassNames("pokemon-detail-component");

export const PokemonDetailComponent: FunctionComponent<PokemonDetailComponentProps> = ({
    pokemon
}) => (
    <div className={classNames()} >
        <div className={classNames("backdrop")} style={{ backgroundColor: pokemon.color.name }} />
        <div>
            <h1>{pokemon.name}</h1>
            <Image src={getSpriteUrl(pokemon.id)} alt={pokemon.name} width={300} height={300} />
            <pre>
                {pokemon.id}
            </pre>
        </div>
    </div>
);
