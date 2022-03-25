import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  // three ways to toggle navbar
  // 1. conditional display which would mount/unmount the navbar
  // 2. use conditional classes to allow for css transitions
  // 3, useRefs on navbar links container and nav links to set dynamic height
  // useRefs for dynamic height adjustments
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    // check height of links to adjust links container height dynamically
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks])
	return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='logo' />
					<button className='nav-toggle' onClick={()=> setShowLinks(!showLinks)}>
						<FaBars />
					</button>
				</div>
				<div className='links-container' ref={linksContainerRef}>
					<ul className='links' ref={linksRef}>
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
