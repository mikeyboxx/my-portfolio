import React from 'react'

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


    // <ul classNameNameName="nav">
    //   <li classNameNameName="nav-item">
    //     <a
    //       href="#aboutMe"
    //       // onClick={() => handlePageChange('About')}
    //       // Check to see if the currentPage is `About`, and if so we use the active link classNameName from bootstrap. Otherwise, we set it to a normal nav-link
    //       // classNameNameName={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About Me
    //     </a>
    //   </li>
    //   <li classNameNameName="nav-item">
    //     <a
    //       href="#portfolio"
    //       // onClick={() => handlePageChange('Blog')}
    //       // Check to see if the currentPage is `Blog`, and if so we use the active link classNameName from bootstrap. Otherwise, we set it to a normal nav-link
    //       // classNameNameName={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Portfolio
    //     </a>
    //   </li>
    //   <li classNameNameName="nav-item">
    //     <a
    //       href="#contact"
    //       // onClick={() => handlePageChange('Contact')}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link classNameName from bootstrap. Otherwise, we set it to a normal nav-link
    //       // classNameNameName={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </a>
    //   </li>
    //   <li classNameNameName="nav-item">
    //     <a
    //       href="#resume"
    //       // onClick={() => handlePageChange('Contact')}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link classNameName from bootstrap. Otherwise, we set it to a normal nav-link
    //       // classNameNameName={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Resume
    //     </a>
    //   </li>
    // </ul>