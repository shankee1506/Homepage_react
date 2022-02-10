import React from 'react';

import './AboutUs.css';
import images from '../../constants/images';

const AboutUs = () => (
  <div className='app__aboutus flex__center section__padding' id="about">
  <div className='app__aboutus-overlay flex__center'>
  <img src={images.G} alt="g letter"/>
  </div>  
  
  <div className='app__aboutus-content flex__center'>
  
  <div className='app__aboutus-content_about'>
  <h1 className='headtext__cormorant'>About Us</h1>
  <img src={images.spoon} alt="acout_spoon" className='spoon__img' />
  <p className='p__opensans'> we welcome to pair your culinary selection with a fine wine from our bar within the main restaurant – stocked with a range of spirits that are both globally renowned to locally savoured.</p>
  <button type='button' className='custom__button'>Know More</button>
  </div>

  <div className='app__aboutus-content_knife flex__center'>
  <img src={images.knife} alt='aboutus__knife'></img>
  </div>

  <div className='app__aboutus-content_history'>
  <h1 className='headtext__cormorant'>Our History</h1>
  <img src={images.spoon} alt="acout_spoon" className='spoon__img' />
  <p className='p__opensans'> we welcome to pair your culinary selection with a fine wine from our bar within the main restaurant – stocked with a range of spirits that are both globally renowned to locally savoured.</p>
  <button type='button' className='custom__button'>Know More</button>
  </div>

  </div>
  </div>
);

export default AboutUs;
