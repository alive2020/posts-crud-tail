import React from 'react';
import styles from '../styles/NewPost.module.css';

function NewPost({ setIsModalOpen }) {
  console.log('new');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='styles.modalBackground'>
      <div className='styles.modalContainer'>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            X
          </button>
          <input type='text' placeholder='Title' />
          <input type='text' placeholder='Date' />
          <input type='text' placeholder='Text' />
          <input type="file" />
          <button
            type='submit'
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPost;
