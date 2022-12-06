const Resume = () => {
  return (
    <div className="card w-100 p-2">
      <div className="card-header text-start">
        <div className="d-flex justify-content-between">
          <h2>Resume</h2>
          <a href="https://docs.google.com/document/d/1Vo9l9CDyiEVGRrqzqVIIa4pCp_2-YC9Ld7vaP4cHP0k/edit" 
            target="_blank" 
            rel="noreferrer" 
            download="Michael-Nabatov-Resume" >
              Download Resume 
          </a>
        </div>
        <div>
            <section className="mt-3" id="services">
                <h4>Services</h4>
                <ul>
                    <li>Web Development</li>
                    <li>App Development</li>
                    <li>Training</li>
                </ul>
            </section>

            <section id="foundation">
                <h4>Foundation Skills</h4>
                <ul>
                  <li>HTML/CSS/Git</li> 
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>The DOM</li> 
                  <li>APIs</li> 
                  <li>JQuery</li>
                  <li>JSON</li> 
                  <li>AJAX</li> 
                </ul>
            </section>

            <section id="technical">
                <h4>Technical Skills</h4>
                <ul>
                  <li>Node</li> 
                  <li>ES6</li>
                  <li>Object-oriented programming</li>
                  <li>Express</li> 
                  <li>MySQL</li> 
                  <li>MVC paradigm</li>
                  <li>Sequelize</li> 
                  <li>Testing</li> 
                  <li>Agile development</li> 
                </ul>
            </section>

            <section id="performance">
                <h4>Performance Skills</h4>
                <ul>
                  <li>Progressive Web Apps</li> 
                  <li>React</li>
                  <li>NoSQL</li>
                  <li>MERN Stack</li> 
                  <li>Computer science fundamentals </li> 
                </ul>
            </section>
        </div>
      </div>
    </div>
  )
}

export default Resume