import { withNaming } from "@bem-react/classname";

export const createClassNames = withNaming({ n: "ns-", e: "__", m: "--" });
