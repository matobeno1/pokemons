import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx);
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <div className="backdrop"/>
                    <div className="content">
                        <Main />
                    </div>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
