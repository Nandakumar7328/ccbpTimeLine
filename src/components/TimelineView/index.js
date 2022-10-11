import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderDisplayView = data => {
    if (data.categoryId === 'PROJECT') {
      return <ProjectTimelineCard projectData={data} key={data.id} />
    }
    return <CourseTimelineCard courseData={data} key={data.id} />
  }

  return (
    <div className="bg-container">
      <h1 className="main-heading">MY JOURNEY OF CCBP 4.0</h1>

      <div>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          themes={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(eachData => renderDisplayView(eachData))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
