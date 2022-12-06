import {FaGithub}  from "react-icons/fa";
import { useState } from "react";

const Project = ({ project: {title, techUsed, imageSrc, deployedUrl, githubRepoUrl}}) => {
  const [isHoveredImage, setIsHoveredImage] = useState(false);
  const [isHoveredTitle, setIsHoveredTitle] = useState(false);
  const [isHoveredIcon, setIsHoveredIcon] = useState(false);

  const style = {
    container: {
      flex: '1 0 45%',
      position: 'relative',
      boxShadow: '12px 15px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '10px',
      margin: '20px',
    },
    image: {
      borderRadius: '15px',
      height: '400px',
      width: '100%',
      opacity: isHoveredImage ? '.4' : '1',
      objectFit: 'cover',
      objectPosition: 'left top'
    },
    icon: {
      color: isHoveredIcon ? 'grey' : 'black',
      cursor: isHoveredIcon ? 'hand' : 'pointer',
      fontSize: '1.5rem',
      marginLeft: 15,
      marginTop: 10,
    },
    title: {
      color: isHoveredTitle ? 'grey' : 'black',
      cursor: isHoveredTitle ? 'hand' : 'pointer',
    },
    techUsed: {
      fontSize: '.9em',
      fontWeight: 500
    },
    caption: {
      display: 'flex',
      alignItems: 'start',
      flexFlow: 'column',
      position: 'absolute',
      top: 50,
      left: 30,
      color: 'black',
      fontStyle: 'italic',
      visibility: !isHoveredImage ? 'hidden' : 'visible',
    }
  }
  
  return (
    <section style={style.container} 
      onMouseOver={() => setIsHoveredImage(true)} 
      onMouseOut={() => setIsHoveredImage(false)} 
    >
      <img 
        style={style.image} 
        src={imageSrc} 
        alt={`${title} website`} 
      />

      <div style={style.caption}>
        <div className='d-flex'>
          <h2 style={style.title} 
            onMouseOver={() => setIsHoveredTitle(true)} 
            onMouseOut={() => setIsHoveredTitle(false)}
            onClick={()=>window.open(deployedUrl, '_blank')}>
              {title}
          </h2>

          <FaGithub style={style.icon} 
            onMouseOver={() => setIsHoveredIcon(true)} 
            onMouseOut={() => setIsHoveredIcon(false)}
            onClick={()=>window.open(githubRepoUrl, '_blank')}
          />
        </div>

        <p style={style.techUsed}>
          {techUsed.join('/')}
        </p>
      </div>
      
    </section>
  )
}

export default Project;