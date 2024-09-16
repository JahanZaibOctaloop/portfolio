import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import CV from '../assets/Jahan_Zaib_Asif.pdf';


const Navbar = () => {
  const [Active, setActive] = useState("")
  const [Toggle, setToggle] = useState(false)

  // Function to handle clicks for different links
  const handleLinkClick = (linkTitle) => {
    setActive(linkTitle);

    if (linkTitle === "Download CV") {
      const link = document.createElement('a');
      link.href = CV;  // Use the imported CV file
      link.setAttribute('download', 'Jahan_Zaib_Asif.pdf'); // Filename for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-primary`}>
      <div className='flex w-full justify-between items-center max-w-7xl mx-auto'>
        <Link className='flex items-center gap-5' onClick={() => { setActive(''); window.scrollTo(0, 0) }} to='/'>
          <img src={'https://res.cloudinary.com/dolfkczwp/image/upload/v1725447898/logoz1_ovqabq.png'} alt="logo" style={{ height: "50px" }} className='object-contain' />

          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Jahan Zaib &nbsp; 
            <span className='sm:block hidden'>| Full-Stack Developer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${Active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleLinkClick(link.title)}
            >
              {link.title === "Download CV" ? (
                <span>{link.title}</span>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={Toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!Toggle)} />
          <div className={`${!Toggle ? "hidden" : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${Active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => handleLinkClick(link.title)}
                >
                  {link.title === "Download CV" ? (
                    <span>{link.title}</span>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
