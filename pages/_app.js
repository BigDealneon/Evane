import '../styles/globals.css';
import '../styles/landing.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Prevent unnecessary re-renders of the entire app
export default React.memo(MyApp);

