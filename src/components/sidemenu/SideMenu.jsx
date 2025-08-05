import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdContactMail } from 'react-icons/md'
import { BiLinkAlt } from 'react-icons/bi'
import './SideMenu.css'


export const SideMenu = ({ changeTheme, darkMode }) => {
  return (
    <div className="side-menu-wrapper">
      <div className="side-menu">
        <button className="theme-button" onClick={changeTheme}>
          {darkMode ? 'LightMode' : 'DarkMode'}
        </button>
        <h2>Arslan Khan</h2>
        <nav>
          <button className="side-menu-btn" px="px-4" white="false" href="#">
            <AiOutlineHome style={{ marginRight: '8px' }} />
            Home
          </button>
          <button className="side-menu-btn" px="px-4" white="false" href="#">
            <CgProfile style={{ marginRight: '8px' }} />
            About
          </button>
          <button className="side-menu-btn" px="px-4" white="false" href="#">
            <MdContactMail style={{ marginRight: '8px' }} />
            Contact
          </button>
          <button className="side-menu-btn" px="px-4" white="false" href="#">
            <BiLinkAlt style={{ marginRight: '8px' }} />
            Links
          </button>
        </nav>
      </div>
    </div>
  )
}
