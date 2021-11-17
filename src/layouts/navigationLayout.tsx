import { SiteNavigationComponent } from "../components";
import { LayoutFunction } from "../types";

/** Function that wraps Next page and renders layout with navigation. */
export const navigationLayout: LayoutFunction = (page) => (
    <>
        <SiteNavigationComponent />
        <main>{page}</main>
    </>
);
