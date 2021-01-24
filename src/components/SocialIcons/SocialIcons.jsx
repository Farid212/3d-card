import './index.css';

const SocialIcons = ({links}) =>{
  return(
    <>
      {
        links.twitter ?
        <a target="_blank" href={links.twitter} className="social-media" rel="noreferrer" >
          <i className=" fab fa-twitter" />
        </a> :
        null
      }
      {
        links.github ?
        <a target="_blank" href={links.github} className="social-media" rel="noreferrer" >
          <i className=" fab fa-github-alt" />
        </a> :
        null
      }
      {
        links.facebook ?
        <a target="_blank" href={links.facebook} className="social-media" rel="noreferrer" >
          <i className=" fab fa-facebook-f" />
        </a> :
        null
      }
      {
        links.linkedin ?
        <a target="_blank" href={links.linkedin} className="social-media" rel="noreferrer" >
          <i className=" fab fa-linkedin-in" />
        </a> :
        null
      }
      {
        links.external ?
        <a target="_blank" href={links.external} className="social-media" rel="noreferrer" >
          <i className=" fas fa-link" />
        </a> :
        null
      }
      {
        links.medium ?
        <a target="_blank" href={links.medium} className="social-media" rel="noreferrer" >
          <i className=" fab fa-medium-m" />
        </a> :
        null
      }

    </>
  )
}

export default SocialIcons;
