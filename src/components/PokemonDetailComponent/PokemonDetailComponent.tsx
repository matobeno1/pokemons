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
    const { height, weight } = pokemon;
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
                        <h1>{pokemon.name} - #{String(pokemon.id).padStart(3, "0")}</h1>
                    </div>

                    <div>
                        <h2>Basic information</h2>
                        <b>Weight: </b>
                        <span>{weight}</span>
                        <br/>
                        <b>Height: </b>
                        <span>{height}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
