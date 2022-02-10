import React from 'react';


import './Header.css';
import images from '../../constants/images';
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => (
  <div className='app__header app__wrapper section__padding id="home"'>
    
  <div className='app__wrapper_info'>
  <SubHeading title="Chase the Jaffna flavour"/>
  <h1 className='app__header-h1'>The Key to Fine Dining</h1>
  <p className='p__opensans' style={{margin:'2rem 0'}}>A fiery blend of spices and colourful dishes feature are a staple of our main restaurant, creating an entire experience in itself – and one not to miss in the northern capital of Jaffna! During the light of the day, you can opt for a traditional lunch complete with an array of exotic curries that pays tribute to the original thali often consumed on fresh banana leaves, while the famed Jaffna crab curry could be the centerpiece of your dinner, accompanied by a selection of rice, thosai, string hoppers, pittu, and more.</p>
  <button type='button' className='custom__button'>Explore the Menu</button>
  </div>

  <div className='app__wrapper_img'>
  <img src={images.welcome} alt="header img" />
  </div>

  </div>
);

export default Header;
