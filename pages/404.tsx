import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { APP_TITLE } from "@src/constants";
import { createClassNames } from "@src/bem";

// import PokeballImage from "../public/pokeball.svg";
import PokeballImage from "../public/pokeballimage.jpeg";

const classNames = createClassNames("page-404");

const NotFoundPage = () => (
    <>
        <Head>
            <title>{APP_TITLE} - Page not found</title>
        </Head>
        <div className={classNames()}>
            <div className={classNames("content")}>
                <div className={classNames("title-404")} aria-hidden="true">
                    <span className={classNames("letter")}>4</span>
                    <div className={classNames("image")}>
                        <Image src={PokeballImage} alt="Poké Ball" />
                    </div>
                    <span className={classNames("letter")}>4</span>
                </div>
                <h1 className={classNames("title-verbose")}>Page Not Found</h1>
                <Link href="/">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className={classNames("link")}>
                        Go back home
                    </a>
                </Link>
            </div>
        </div>
    </>
);

export default NotFoundPage;
