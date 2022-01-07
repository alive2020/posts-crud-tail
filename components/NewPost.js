import React, { useEffect, useState } from 'react';
import styles from '../styles/NewPost.module.css';

function NewPost({ setPosts, post, handleEdit, setIsModalOpen }) {
  useEffect(() => {
    if (post) {
      setState(post);
    } else {
      setState({
        title: '',
        date: '',
        description: '',
        image: '',
        id: null,
      });
    }
  }, [post]);
  const [state, setState] = useState({
    title: '',
    date: '',
    description: '',
    image: '',
    id: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = state;
    let id = new Date().getTime();
    temp['id'] = id;
    setPosts(temp);
    setIsModalOpen(false);
    setState({
      title: '',
      date: '',
      description: '',
      image: '',
      id: null,
    });
  };
  const uploadFile = (e) => {
    e.preventDefault();
    let imgname = e.target.files[0].name;
    setState({ ...state, image: imgname });
  };
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <form
          className='mt-8 space-y-6'
          onSubmit={() => (post ? handleEdit(state) : handleSubmit(event))}
        >
          {/* <input type="hidden" name="remember" value="true"/> */}
          <div className='rounded-md shadow-sm -space-y-px'>
            <button
              type='button'
              className='relative right-0 top-0'
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              X
            </button>
            <div>
              <label htmlFor='title' className='sr-only'>
                Title
              </label>
              <input
                // onChange={(e) => handleChange(e)}
                onChange={(e) => setState({ ...state, title: e.target.value })}
                id='title'
                name='title'
                // value={data.title}
                value={state.title}
                type='text'
                autoComplete='text'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Title'
              />
            </div>
            <div>
              <label htmlFor='date' className='sr-only'>
                Date
              </label>
              <input
                // onChange={(e) => handleChange(e)}
                onChange={(e) => setState({ ...state, date: e.target.value })}
                id='date'
                name='date'
                // value={data.date}
                value={state.date}
                type='date'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Date'
              />
            </div>
            <div>
              <label htmlFor='description' className='sr-only'>
                Description
              </label>
              <textarea
                // onChange={(e) => handleChange(e)}
                onChange={(e) =>
                  setState({ ...state, description: e.target.value })
                }
                id='description'
                name='description'
                // value={data.description}
                value={state.description}
                type='text'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm h-56'
                placeholder='Description'
              />
            </div>
            <div>
              <input
                // onChange={(e) => handleChange(e)}
                onChange={uploadFile}
                id='image'
                name='image'
                // value={data.image}
                // value={state.image}
                type='file'
                className='block w-full text-sm text-gray-500 mt-4 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
      file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'
              />
              {state.image !== '' && <p>{state.image}</p>}
            </div>
          </div>
          <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center'>
            {/* <div className='ml-3 inline-flex rounded-md shadow'>
              <button
                // type='submit'
                onClick={() => {
                  setIsModalOpen(false);
                }}
                className='inline-flex items-center justify-center px-20 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50'
              >
                Cancel{' '}
              </button>
            </div> */}
            <div className='inline-flex rounded-md shadow'>
              <button
                type='submit'
                // onClick={() => {
                // }}
                className='inline-flex items-center justify-center px-20 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
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
