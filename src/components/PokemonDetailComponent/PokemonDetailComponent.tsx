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
            <div className={classNames("card")}>
                <div className={classNames("image")}>
                    <Image
                        src={getSpriteUrl(pokemon.id)}
                        alt={pokemon.name}
                        draggable={false}
                        layout="fill"
                    />
                </div>
                <div className={classNames("description")}>
                    <div className={classNames("heading")}>
                        <h1>{pokemon.name}</h1>
                    </div>
                    <pre>
                        {pokemon.id}
                    </pre>
                </div>
            </div>
        </div>
    );
};
