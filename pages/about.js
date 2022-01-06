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
      <main className='h-screen bg-neutral-200'>
      <h3 className='relative top-28 left-64'>About our Blog</h3>

      </main>
    </div>
  );
}

export default about;
