import React from 'react'
import Logo from '../../img/logo-new2.png';
import './LogoSearch.css'
import {UilSearch} from '@iconscout/react-unicons';

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <img src={Logo} alt='Logo' />
        <div className='Search'>
            <input type='text' placeholder='#Explore'/>
            <div className='s-icon'>
                <UilSearch />
            </div>
        </div>
    </div>
  )
}

export default LogoSearch