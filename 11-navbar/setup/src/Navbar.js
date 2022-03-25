import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  // use conditional classes to allow for css transitions as opposed to conditional display which would mount/unmount the navbar
  
	return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='logo' />
					<button className='nav-toggle' onClick={()=> setShowNav(!showNav)}>
						<FaBars />
					</button>
				</div>
				<div className={`${showNav && 'show-container'} links-container`}>
					<ul className='links'>
            {links.map((item) => {
              const {id, url, text} = item;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
					</ul>
				</div>
				<ul className='social-icons'>
					{social.map((item) => {
            const {id, url, icon} = item
						return (
							<li key={id}>
								<a href={url}>{icon}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
