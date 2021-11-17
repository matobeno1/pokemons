import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

/** Type representing a pokemon. */
export type Pokemon = {
    id: string;
    name: string;
    weight?: number
    height?: number,
    color: {
        name: string
    },
};

/** Type of a function used in pages to extend page with specific layout. */
export type LayoutFunction = (page: ReactElement) => ReactNode;

/** Augmented {@link NextPage} with `getLayout` function. */
export type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
    getLayout?: LayoutFunction
};

/** Augmented {@link AppProps} */
export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
};
