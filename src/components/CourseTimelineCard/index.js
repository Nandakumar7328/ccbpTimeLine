import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseData} = props
  const {courseTitle, description, tagsList, duration} = courseData

  return (
    <div className="course-details">
      <div className="heading-time">
        <h1 className="heading">{courseTitle}</h1>
        <div className="time-section">
          <AiFillClockCircle className="clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="content">{description}</p>
      <div className="tag-list">
        {tagsList.map(each => (
          <p className="tag" id={each.id}>
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
