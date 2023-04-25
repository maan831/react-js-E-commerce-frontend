import React from 'react'
import './contact.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';

const contact = ()=> {
  return (
    <div className="contact">
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="text" placeholder='Enter your e-mail' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookOutlinedIcon/>
                <InstagramIcon/>
                <GoogleIcon/>
                <PinterestIcon/>
                <TwitterIcon/>

            </div>
        </div>
    </div>
  )
}

export default contact