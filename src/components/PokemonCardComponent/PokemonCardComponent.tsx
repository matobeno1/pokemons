import { FunctionComponent } from "react";
import Image from "next/image";
import Link, { LinkProps } from "next/link";

import { createClassNames } from "../../bem";

type PokemonCardComponentProps = {
    /** Pokemon name. */
    name: string,
} & Pick<LinkProps, "href">;

const classNames = createClassNames("pokemon-card-component");

export const PokemonCardComponent: FunctionComponent<PokemonCardComponentProps> = ({
    name,
    href,
}) => {
    return (
        <div className={classNames()}>
            {/*<Image className={classNames("image")} src="" alt=""/>*/}
            <div className={classNames("title")}>
                {name}
            </div>
            <Link href={href}>View</Link>
        </div>
    );
};
