import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectData} = props
  const {
    imageUrl,
    projectUrl,
    duration,
    projectTitle,
    description,
  } = projectData

  return (
    <div className="project-details">
      <img className="tag-img" src={imageUrl} alt="project" />
      <div className="heading-time2">
        <h1 className="heading2">{projectTitle}</h1>
        <div className="time-section2">
          <AiFillCalendar className="calender" />
          <p className="duration2">{duration}</p>
        </div>
      </div>
      <p className="content2">{description}</p>
      <a href={projectUrl} className="visit">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
