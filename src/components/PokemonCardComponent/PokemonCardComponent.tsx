import { FunctionComponent } from "react";
import Image from "next/image";

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
            <Image className={classNames("image")} src="" alt=""/>
            <div className={classNames("title")}>
                {pokemon}
            </div>
            <button>View</button>
        </div>
    );
};
