import Head from 'next/head';
import { useEffect, useState } from 'react';
import ArticlePost from '../components/ArticlePost';
import NewPost from '../components/NewPost';
import Post from '../components/Post';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // useEffect(() => {
  //   setOpenModal(false);
  // }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Billionaires Blog</title>
        <meta
          name='description'
          content='Blog about Billionaires life and lessons'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-neutral-50 '>
        <div className='w-full h-96 flex flex-row justify-items-center ml-20 pt-20'>
          <div className='showcase-left flex-1 w-72 '>
            <h2 className='font-bold text-3xl mb-5'>
              Hi, I am Elon, <br /> Creative Blogger
            </h2>
            <p className='font-normal text-xs mb-5'>
              Elon Musk is working to revolutionize transportation both on
              Earth, through electric car maker Tesla -- and in space, via
              rocket producer SpaceX.
            </p>
            <button className='w-167 h-21 font-medium text-sm text-white p-3 bg-red-500 rounded-sm'>
              Download Magazine
            </button>
          </div>
          <div className='flex-1 w-28'>
            <img
              className='w-60 h-60 rounded-full'
              src='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704'
              alt=''
            />
          </div>
        </div>

        <div className='hotPosts h-96 bg-cyan-50 '>
          <h3 className='my-2 pt-5 ml-14'>Recent posts</h3>
          <div className='flex flex-row items-center justify-center		'>
            <Post />
            <Post />
          </div>
        </div>

        <div className='posts pt-5 bg-white'>
          <h3 className='py-5'>Featured works</h3>
          <div className='flex'>
            <button
              className='bg-red-500 text-white py-1 px-3 rounded-sm justify-end hover:bg-red-700'
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Create a post
            </button>
            {isModalOpen && <NewPost setIsModalOpen={setIsModalOpen} />}
          </div>
          <div className=''>
            <ArticlePost />
            <ArticlePost />
          </div>
        </div>
      </main>
    </div>
  );
}
