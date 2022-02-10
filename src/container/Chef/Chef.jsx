import React from 'react';

import './Chef.css';

import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__chef app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
    <img src={images.chef} alt="chef"/>
    </div>

    <div className='app__wrapper_info'>
    <SubHeading title="Chef's world" />
    <h1 className='headtext__cormorant'>What we Believe In</h1>

    <div className='app__chef-content'>
    <div className='app__chef-content_quote'>
    <img src={images.quote} alt="quote"/>
    <p className='p__opensans'>Cooking is at once child’s play and adult joy. And cooking done with care is an act of love.</p>
    </div>
    
    <p className='p__opensans'>Cooking requires confident guesswork and improvisation — experimentation and substitution, dealing with failure and uncertainty in a creative way.</p>

    </div>

    <div className='app__chef-sign'>
    <p>Dhammu</p>
    <p className='p__opensans'>Chef & founder</p>
    <img src={images.sign} alt="sign" />
    </div>
    </div>
  </div>
);

export default Chef;
