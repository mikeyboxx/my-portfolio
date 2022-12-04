import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

const renderPage = (currentPage) => {
  switch (currentPage) {
    case 'aboutme': 
      return (<About />)
    case 'portfolio': 
      return (<Portfolio />)
    case 'contact': 
      return (<Contact />)
    case 'resume': 
      return (<Resume />)
    default: break;
  }
}

const Body = ({currentPage}) => {
  return (
    <div>
      {renderPage(currentPage)}
    </div>
  )
}

export default Body