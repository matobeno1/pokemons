import { FunctionComponent } from "react";
import Link from "next/link";
import { createClassNames } from "../../bem";

const classNames = createClassNames("site-navigation-component");

export const SiteNavigationComponent: FunctionComponent = () => (
    <nav className={classNames()}>
        <Link href="/">Home</Link>
    </nav>
);
