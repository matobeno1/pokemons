import { withNaming } from "@bem-react/classname";

/**
 *  Creates a `classNames` function, which generates BEM CSS classes in a specific namespace.
 *  @see http://getbem.com/introduction/
 *  */
export const createClassNames = withNaming({ e: "__", m: "--" });
