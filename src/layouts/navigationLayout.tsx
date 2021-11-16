import { SiteNavigationComponent } from "../components";
import { LayoutFunction } from "../types";

export const navigationLayout: LayoutFunction = (page) => {
    return (
        <>
            <SiteNavigationComponent />
            <main>{page}</main>
        </>
    );
};
