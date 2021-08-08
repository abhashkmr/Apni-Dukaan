
import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FooterOption from "./FooterOption";
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const Footer = () => {
  return (
    <div className='flex flex-1 flex-col mt-36 '>
      <footer className=" text-center">
        
        <div className='bg-gray-400 ' m>
          <h1>Follow Us</h1>
        </div>

        <div className = "py-2  flex justify-center" >
          <FooterOption Icon = {FacebookIcon} title = 'Facebook' />
          <FooterOption Icon = {TwitterIcon} title = 'Facebook' />
          <FooterOption Icon = {InstagramIcon} title = 'Instagram' />
          <FooterOption Icon = {LinkedInIcon} title = 'LinkedIn' />
        </div>
      

        <div
          className="text-center p-4 bottom-0 bg-dark">
          <p className="text-white font-mont">
            © 2021 Copyright: Abhash && Tyagi && Mota && Babu
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
