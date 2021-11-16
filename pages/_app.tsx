import { AppPropsWithLayout } from "@src/types";

import "../styles/globals.scss";
import "../styles/pages/index.scss";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <main>{page}</main>);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
