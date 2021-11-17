import React from "react";
import renderer from "react-test-renderer";
import { LoaderComponent } from "./LoaderComponent";

describe(LoaderComponent, () => {
    it("snapshots", () => {
        const tree = renderer
            .create(<LoaderComponent />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
