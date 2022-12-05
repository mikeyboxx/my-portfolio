import projects from '../utils/projects';
import Project from './Project';

const style={
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // padding: '2%',
  }
}

const Portfolio = () => {
  return (
    // <div className='d-flex ml-3'>
    <div className="card w-100 p-2" >
      <div className="card-header text-start">
          <h4>Portfolio</h4>
      </div>
      <div className="card flex-row flex-wrap">

        {projects.map((project, idx)=>(
          <Project key={idx} project={project} />
        ))}

      </div>
    </div>
  )
}

export default Portfolio