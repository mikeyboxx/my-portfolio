import React from 'react'
import Navigation from './Navigation'

const style = {
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}
const Header = () => {
  return (
    <div style={style.header}>
      <div>
        Michael Nabatov
      </div>
      <Navigation />
    </div>
  )
}

export default Header