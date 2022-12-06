import profilePic from '../images/profile-pic.png'

const style = {
  image: {
    height: 80,
    width: 80,
    float: 'left',
    padding: 0,
    margin: '0 25px 0 0',
    color: 'white',
    borderRadius: '50%',
    shapeOutside: 'circle()'
  },
}

const About = () => {
  return (
    <div className="card w-100 p-2">
      <div className="card-header text-start">
        <h4>About Me</h4>
      </div>

      <div className="card-body">
        <img className="" style={style.image} src={profilePic} alt="Headshot of the developer" />
        <p className="card-text text-start m-0" >
          I am a senior IBM Mainframe Application developer/Project Manager, with 18+ years of hands on experience in back office application development in the domain of financial and brokerage industries, that reinvented himself as a full stack web developer.  I thrive in a fast-paced, constantly changing, and challenging environment.  I am self-motivated, able to work independently, and have the ability to perform well within cross-functional teams.
        </p>

        <div className="d-flex flex-column align-items-start mt-3">
          <p className="fw-bold">As a full stack web developer, I can: </p>
          <ul className="text-start m-0">
            <li>write code in one or more programming or scripting languages, such as JavaScript</li>
            <li>plan and prototype new applications</li>
            <li>design the architecture of the components of an application</li>
            <li>decide on the best technologies and languages for the project</li>
            <li>test sites and applications in different browsers and environments</li>
            <li>problem-solve</li>
            <li>fix bugs in existing projects</li>
            <li>test new features thoroughly to ensure they perform the correct task in all cases</li>
            <li>run performance benchmarking tests</li>
            <li>review colleagues' code</li>
            <li>build and test Application Program Interfaces (APIs) for applications to exchange data</li>
            <li>research, incorporate and contribute to open-source projects</li>
            <li>meet designers, developers and project staff for progress updates</li>
            <li>gather requirements from clients and users</li>
            <li>learn and test new technologies, frameworks and languages</li>
            <li>stay up to date with new trends and advancements in web development</li>
            <li>build and maintain databases</li>
            <li>carry out code refactoring and optimisation of existing code</li>
            <li>document code, so other developers can understand and contribute to it</li>
            <li>attend and speak at web development conferences and workshops</li>
            <li>design information architecture within an application or website.</li>
          </ul>
        </div>
      </div>
    </div>  
  )
}

export default About