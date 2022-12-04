import {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('aboutme');
  
  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={(page) => setCurrentPage(page)}/>
      <Body currentPage={currentPage}/>
      <Footer />

    </div>
  );
}

export default App;