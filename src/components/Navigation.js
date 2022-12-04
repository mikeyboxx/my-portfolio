const Navigation = ({currentPage, pageHandler}) => {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid ">

        <div className="navbar-brand">
          <h1>Michael Nabatov</h1>
        </div>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a 
                className={currentPage === 'aboutme' ? 'nav-link active' : 'nav-link'} 
                href="#aboutMe"
                onClick={()=>pageHandler('aboutme')}>
                  About Me
              </a>
            </li>

            <li className="nav-item">
              <a 
                className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'} 
                href="#portfolio"
                onClick={()=>pageHandler('portfolio')}>
                  Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a 
                className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'} 
                href="#contact"
                onClick={()=>pageHandler('contact')}>
                  Contact
              </a>
            </li>

            <li className="nav-item">
              <a 
                className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'} 
                href="#resume"
                onClick={()=>pageHandler('resume')}>
                  Resume
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navigation;