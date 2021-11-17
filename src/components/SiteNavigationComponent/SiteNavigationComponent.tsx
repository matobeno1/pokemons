import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClassNames } from "../../bem";

const classNames = createClassNames("site-navigation-component");

export const SiteNavigationComponent: FunctionComponent = () => (
    <nav className={classNames()}>
        <Link href="/" passHref>
            <a className={classNames("back")}>
                <span className={classNames("image")}>
                    <Image src="/pokeball.svg" layout="fill" alt="logo" />
                </span>
                <span className={classNames("back-text")}>
                    Pokédex
                </span>
            </a>
        </Link>
    </nav>
);
