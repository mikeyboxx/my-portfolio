import React from 'react'

const renderPage = (currentPage) => {
  switch (currentPage) {
    case 'aboutme': 
      return (<div>About Me</div>)
      break;
    case 'portfolio': 
      return (<div>Portfolio</div>)
      break;
    case 'contact': 
      return (<div>Contact</div>)
      break;
    case 'resume': 
      return (<div>Resume</div>)
      break;
    default: break;
  }
}

const Portfolio = ({currentPage}) => {
  return (
    <div>
      {renderPage(currentPage)}
    </div>
  )
}

export default Portfolio