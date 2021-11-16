import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

export type Pokemon = {
    id: string;
    name: string;
    weight: number
    height: number,
    color: {
        name: string
    },
};

export type LayoutFunction = (page: ReactElement) => ReactNode;

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: LayoutFunction
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
};
