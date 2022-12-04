import React from 'react'
import Navigation from './Navigation'

const Header = ({currentPage, handlePageChange}) => {
  return (
      <Navigation currentPage={currentPage} pageHandler={handlePageChange}/>
  )
}

export default Header