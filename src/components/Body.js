import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

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