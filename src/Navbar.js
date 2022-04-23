import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks=()=>{
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      linksContainerRef.current.classList.toggle('show-container');
      const isContains = linksContainerRef.current.classList.contains('show-container');
      if(isContains)
         linksContainerRef.current.style.height=`${linksHeight}px`;
      else
         linksContainerRef.current.style.height=`0px`;
  }
  useEffect(()=>{
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      linksContainerRef.current.style.height=`${linksHeight}px`;
  },[]);

  return <nav>
    <div className='nav-center'>
       <div className='nav-header'>
           <img src={logo} alt='logo'></img>
           <button className='nav-toggle' onClick={toggleLinks}>
             <FaBars />
           </button>
       </div>
       <div className='links-container show-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
              {links.map((link)=>{
                 const {id,url,text} = link;
                 return <li key={id}>
                   <a href={url}>{text}</a>
                 </li>
              })}
            </ul>
       </div>
       <ul className='social-icons'>

       </ul>
    </div>
  </nav>
}

export default Navbar
