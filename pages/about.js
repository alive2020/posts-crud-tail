import React from 'react';
import Head from 'next/head';

function about() {
  return (
    <div>
      <Head>
        <title>Billionaires Blog</title>
        <meta
          name='description'
          content='About Billionaires Blog'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h3>About page is here</h3>
    </div>
  );
}

export default about;
