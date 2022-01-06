import React, { useState } from 'react';
import styles from '../styles/NewPost.module.css';

function NewPost({ setIsModalOpen }) {
  const [data, setData] = useState({
    title: '',
    date: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('data', {
      title: data.title,
      date: data.date,
      description: data.description,
      image: date.image,
    });
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <form
          class='mt-8 space-y-6'
          method='POST'
          onSubmit={(e) => handleSubmit(e)}
        >
          {/* <input type="hidden" name="remember" value="true"/> */}
          <div class='rounded-md shadow-sm -space-y-px'>
            <button
              className='relative right-0 top-0'
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              X
            </button>
            <div>
              <label for='title' class='sr-only'>
                Title
              </label>
              <input
                onChange={(e) => handleChange(e)}
                id='title'
                name='title'
                value={data.title}
                type='text'
                autocomplete='text'
                required
                class='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Title'
              />
            </div>
            <div>
              <label for='title' class='sr-only'>
                Title
              </label>
              <input
                onChange={(e) => handleChange(e)}
                id='date'
                name='date'
                value={data.date}
                type='date'
                required
                class='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Date'
              />
            </div>
            <div>
              <label for='description' class='sr-only'>
                description
              </label>
              <textarea
                onChange={(e) => handleChange(e)}
                id='description'
                name='description'
                value={data.description}
                type='text'
                required
                class='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm h-56'
                placeholder='Description'
              />
            </div>
            <div>
              <input
                onChange={(e) => handleChange(e)}
                id='image'
                name='image'
                value={data.image}
                type='file'
                className='block w-full text-sm text-gray-500 mt-4 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
      file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'
              />
            </div>
          </div>
          <div class='mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center'>
            <div class='ml-3 inline-flex rounded-md shadow'>
              <button
                type='submit'
                onClick={() => {
                  setIsModalOpen(false);
                }}
                class='inline-flex items-center justify-center px-20 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50'
              >
                Cancel{' '}
              </button>
            </div>
            <div class='inline-flex rounded-md shadow'>
              <button
                type='submit'
                onClick={() => {
                  setIsModalOpen(false);
                }}
                class='inline-flex items-center justify-center px-20 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewPost;
