import React from 'react';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import 'animate.css';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a className="animate__animated animate__rollIn animate__slow animate__delay-2s" href="https://www.linkedin.com/in/armin-pezo-58a896192/" target="blank"><BsLinkedin className='header_icons'/></a>
        <a className="animate__animated animate__rollIn animate__slow animate__delay-2s" href="https://github.com/mrarmin1992" target="blank"><BsGithub/></a>
        <a className="animate__animated animate__rollIn animate__slow animate__delay-2s" href="https://www.instagram.com/mr.armin_1/" target="blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials;