import React from 'react'
import Twitter from './../../assets/images/social/twitter.png'
import Insta from './../../assets/images/social/instagram.png'

function NavbarSideContentFooter() {
  return (
    <div className='flex flex-col justify-center'>
      <a href='https://docs.google.com/forms/d/1OHC2Zc2gjh3zG-mv8iRpTwEMuYtsseykc1FQnBR_-AQ/edit?ts=645210b4' target="_blank" rel="noopener noreferrer" className="block text-xl text-center">
            설문조사
      </a>
      <div className='flex my-2 justify-center'>
        <a href='https://twitter.com/hearting_kr' target="_blank" rel="noopener noreferrer">
          <img src={Twitter} className='w-6 h-6 mx-2'/>
        </a>
        <img src={Insta} className='w-6 h-6 mx-2' />
      </div>
      <p className='text-gray-400'>SSAFY 8기 B307</p>
      
    </div>
  )
}

export default NavbarSideContentFooter