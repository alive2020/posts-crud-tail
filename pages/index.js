import Head from 'next/head';
// import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Billionaires Blog</title>
        <meta
          name='description'
          content='Blog about Billionaires life and lessons'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-neutral-50 '>
        <div className='w-full h-96'>
          <div className='showcase-left'>
          <h2 className='font-bold text-3xl mb-5'>
            Hi, I am Elon, <br /> Creative Blogger
          </h2>
          <p className='font-normal text-xs mb-5'>
            Elon Musk is working to revolutionize transportation both on Earth,
            through electric car maker Tesla -- and in space, via rocket
            producer SpaceX.
          </p>
          <button className='w-167 h-21 font-medium text-sm text-white p-3 bg-red-500 rounded-sm'>
            Download Magazine
          </button>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div className='hotPosts'>

        </div>
        <div className='posts'></div>
      </main>
    </div>
  );
}
