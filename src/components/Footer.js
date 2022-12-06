import {BsTwitter, BsGithub, BsLinkedin}  from "react-icons/bs";

const style = {
  container: {
    margin: 'auto',
    width: '50%'
  }
}

const Footer = () => {
  return (
    <div style={style.container} className="d-flex justify-content-around">
      <BsGithub className="fs-1" onClick={()=>window.open('https://github.com/mikeyboxx', '_blank')}/>
      <BsTwitter className="fs-1" onClick={()=>window.open('https://twitter.com/DJ_MikeyBoxx', '_blank')}/>
      <BsLinkedin className="fs-1" onClick={()=>window.open('https://www.linkedin.com/in/michael-nabatov-39585551/', '_blank')}/>
    </div>
  )
}

export default Footer