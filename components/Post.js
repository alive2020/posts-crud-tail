import React from 'react';

function Post() {
  return (
    <div className='w-96 h-52 bg-white m-5 p-5'>
      <h1 className='font-bold text-base'>The Billionaires Who Died In 2021</h1>
      <div className='flex flex-row font-normal text-sm my-5'>
        <p >6 Jan 2022</p> <span className='px-5'>|</span>
        <p>History of Billionaires</p>
      </div>
      <p className='font-normal text-xs mb-5'>
        From a gambling tycoon with a global empire to a member of the storied
        Rothschild banking family, a total of 27 billionaires passed away this
        year, leaving behind legacies of entrepreneurship—and billions of
        dollars. That’s out of a total of 2,755 billionaires Forbes found for
        our 2021 list of the World’s Billionaires, published in April 2021.
      </p>
    </div>
  );
}

export default Post;
