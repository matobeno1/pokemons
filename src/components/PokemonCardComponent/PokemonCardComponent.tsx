import React, { FunctionComponent } from "react";
import { Pokemon } from "../../types";
import { createClassNames } from "../../bem";

type PokemonCardComponentProps = {
    pokemon: Pokemon
};

const classNames = createClassNames("pokemon-card-component");

export const PokemonCardComponent: FunctionComponent<PokemonCardComponentProps> = ({
    pokemon
}) => {
    return (
        <div className={classNames()}>
            <img className={classNames("image")} src="" alt=""/>
            <div className={classNames("body")}>
                {pokemon}
            </div>
            <button>View</button>
        </div>
    );
};
