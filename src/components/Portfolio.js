import projects from '../utils/projects';
import Project from './Project';

const Portfolio = () => {
  return (
    <div className='d-flex ml-3'>
      {projects.map((project)=>(
        <Project project={project} />
      ))}
    </div>
  )
}

export default Portfolio