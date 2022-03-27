import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context';

// show a dynamic width for the submenu links 
// => useRef
const Submenu = () => {
  const {isSubmenuOpen, location, menuText} = useGlobalContext();
  const container = useRef(null); 

  // change submenu container position whenever nav menu text location changes
  useEffect(() => {
    const submenu = container.current;
    const {center, bottom} = location;
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location])

  return <aside className={`submenu ${isSubmenuOpen && 'show'}`} ref={container}>
    submenu
  </aside>
}

export default Submenu
