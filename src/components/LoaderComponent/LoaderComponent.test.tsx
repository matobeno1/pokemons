import { act, create } from "react-test-renderer";
import { LoaderComponent } from "./LoaderComponent";

describe(LoaderComponent, () => {
    it("snapshots", async () => {
        let root: ReturnType<typeof create> | undefined;
        act(() => {
            root = create(<LoaderComponent />);
        });
        expect(root?.toJSON()).toMatchSnapshot();
    });
});
