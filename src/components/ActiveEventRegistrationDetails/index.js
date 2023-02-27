// Write your code here

import './index.css'

const registrationStatusConstants = {
  completed: 'REGISTERED',
  inProgress: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeStatus} = props

  const registeredUser = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const registrationsOpen = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  const registrationClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. we will reopen the registrations soon!</p>
    </div>
  )

  const registration = () => (
    <div>
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const renderTheRegistration = () => {
    switch (activeStatus) {
      case registrationStatusConstants.closed:
        return registrationClosed()
      case registrationStatusConstants.completed:
        return registeredUser()
      case registrationStatusConstants.inProgress:
        return registrationsOpen()
      default:
        return registration()
    }
  }

  return renderTheRegistration()
}

export default ActiveEventRegistrationDetails
