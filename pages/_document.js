import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(documentContext) {
    const initialProps = await Document.getInitialProps(documentContext);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Spectral"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Karla"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
