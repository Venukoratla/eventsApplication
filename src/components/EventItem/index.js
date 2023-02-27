// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, getEventId} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails
  const imageClicked = () => {
    getEventId(id)
  }

  return (
    <li key={id} className="event-item">
      <button onClick={imageClicked}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <div>
        <p className="heading" onClick={imageClicked}>
          {name}
        </p>
        <p>{location}</p>
      </div>
    </li>
  )
}

export default EventItem
