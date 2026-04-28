import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* DNS Prefetch for critical third-party domains */}
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://fast.wistia.com" />
          <link rel="dns-prefetch" href="https://distillery.wistia.com" />
          
          {/* Font Loading - Preconnect to font servers */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          
          {/* Wistia Domain Preconnect (max 4 preconnects per Lighthouse recommendation) */}
          <link rel="preconnect" href="https://fast.wistia.com" />
          <link rel="preconnect" href="https://distillery.wistia.com" />
          <link rel="preconnect" href="https://embed-ssl.wistia.com" />
          
          {/* Preload Wistia E-v1.js for faster LCP - critical for video hero */}
          <link
            rel="preload"
            as="script"
            href="https://fast.wistia.com/assets/external/E-v1.js"
            crossOrigin="anonymous"
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
