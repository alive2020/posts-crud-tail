import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';
function ArticlePost() {
  return (
    <div className='flex flex-row w-full h-52 bg-white py-3'>
      <div className='articleLeft h-40 pr-3'>
        <img
          className=''
          src='https://images.unsplash.com/photo-1583574928108-53be39420a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fG1vbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
          alt=''
        />
      </div>
      <div className='articleRight'>
        <div className='flex flex-row justify-between'>
          <h1 className='font-bold text-base'>
            The Billionaires Who Died In 2021
          </h1>
          <div className='pr-2'>
            <IconButton>
              <EditIcon className='' />
            </IconButton>
            <IconButton>
              <DeleteForeverIcon />
            </IconButton>
          </div>
        </div>

        <div className='flex flex-row font-normal text-sm my-5'>
          <p className='text-white p-1 mr-5 rounded-2xl bg-gray-500'>
            6 Jan 2022
          </p>
          <p className='text-zinc-400'>History of Billionaires</p>
        </div>
        <p className='font-normal text-xs mb-5'>
          From a gambling tycoon with a global empire to a member of the storied
          Rothschild banking family, a total of 27 billionaires passed away this
          year, leaving behind legacies of entrepreneurship—and billions of
          dollars. That’s out of a total of 2,755 billionaires Forbes found for
          our 2021 list of the World’s Billionaires, published in April 2021.
        </p>
      </div>
    </div>
  );
}

export default ArticlePost;
