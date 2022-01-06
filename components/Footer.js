import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

function Footer() {
  return (
    <div className='text-center p-5 pt-10 m-5'>
      <div className='flex flex-row content-center justify-center	'>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          {' '}
          <InstagramIcon />
        </IconButton>
        <IconButton>
          {' '}
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
      </div>

      <p className='m-3 font-light text-xs'>
        Copyright ©2022 All rights reserved
      </p>
    </div>
  );
}

export default Footer;
