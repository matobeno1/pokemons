import { act, create } from "react-test-renderer";
import { SiteNavigationComponent } from "./SiteNavigationComponent";

describe("SiteNavigationComponent", () => {
    it("snapshots", async () => {
        let root: ReturnType<typeof create> | undefined;
        act(() => {
            root = create(<SiteNavigationComponent />);
        });
        expect(root?.toJSON()).toMatchSnapshot();
    });
});
