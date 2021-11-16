import { CSSProperties, FunctionComponent } from "react";
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
}) => {
    const style = { "--background-color": pokemon.color.name } as CSSProperties;
    return (
        <div className={classNames()} style={style}>
            <div className={classNames("backdrop")} />
            <div className={classNames("heading")}>
                <h1>{pokemon.name}</h1>
            </div>
            <div className={classNames("image")}>
                <Image
                    src={getSpriteUrl(pokemon.id)}
                    alt={pokemon.name}
                    width={300}
                    height={300}
                />
            </div>
            <div className={classNames("card")}>
            <pre>
                {pokemon.id}
            </pre>
            </div>
        </div>
    );
};
