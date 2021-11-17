import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { APP_TITLE } from "@src/constants";
import { createClassNames } from "@src/bem";

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
                        <Image src="/pokeball.svg" layout="fill" />
                    </div>
                    <span className={classNames("letter")}>4</span>
                </div>
                <h1 className={classNames("title-verbose")}>Page Not Found</h1>
                <Link href="/">
                    <a className={classNames("link")}>
                        Go back home
                    </a>
                </Link>
            </div>
        </div>
    </>
);

export default NotFoundPage;
