import { FunctionComponent } from "react";
import Image from "next/image";

import { createClassNames } from "../../bem";

const classNames = createClassNames("loader-component");

export const LoaderComponent: FunctionComponent = () => (
    <div className={classNames()}>
        <div className={classNames("image")}>
            <Image src="/pokeball.svg" layout="fill"/>
        </div>
    </div>
);
