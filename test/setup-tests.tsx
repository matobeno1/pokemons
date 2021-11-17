import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

jest.mock(
    "next/image",
    () =>
        function Image(props: any) {
            return <img {...props} />;
        },
);

jest.mock(
    "next/link",
    () =>
        function Link(props: any) {
            return <link {...props} />;
        },
);
