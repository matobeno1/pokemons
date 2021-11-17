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
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a role="link" className={classNames()} tabIndex={0}>
                <div className={classNames("backdrop")} style={{ backgroundColor: color }} />
                <span className={classNames("title")}>
                    {name}
                </span>
                <div className={classNames("image")}>
                    {imageSrc && (
                        <Image
                            src={imageSrc}
                            alt={name}
                            layout="fill"
                        />
                    )}
                </div>
            </a>
        </Link>
    );
};
