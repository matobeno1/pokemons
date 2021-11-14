import { FunctionComponent } from "react";
import Image from "next/image";
import Link, { LinkProps } from "next/link";

import { createClassNames } from "../../bem";

type PokemonCardComponentProps = {
    /** Pokemon name. */
    name: string,
    imageSrc?: string
    color?: string
} & Pick<LinkProps, "href">;

const classNames = createClassNames("pokemon-card-component");

export const PokemonCardComponent: FunctionComponent<PokemonCardComponentProps> = ({
    name,
    href,
    imageSrc,
    color,
}) => {
    return (
        <Link href={href} passHref>
            <a className={classNames()} tabIndex={0}>
                <div className={classNames("backdrop")} style={{ backgroundColor: color }} />
                {imageSrc && (
                    <Image
                        className={classNames("image")}
                        src={imageSrc}
                        alt={name}
                        width={100}
                        height={100}
                    />
                )}
                <div className={classNames("title")}>
                    {name}
                </div>

            </a>
        </Link>
    );
};
