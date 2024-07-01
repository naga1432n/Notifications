const Notification = props => {
  const {type, message, iconUrl} = props
  return (
    <div className={`notification ${type}`}>
      <img src={iconUrl} alt={`${type} icon`} />
      <p>{message}</p>
    </div>
  )
}

const element = (
  <div className='notifications-container'>
    <h1 className='title'>Notifications</h1>
    <Notification
      type='info'
      message='Information message'
      iconUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
    />
    <Notification
      type='success'
      message='Success Message'
      iconUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
    />
    <Notification
      type='warning'
      message='Error Message'
      iconUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
    />
    <Notification
      type='error'
      message='Error Message'
      iconUrl='https://assents.ccbp.in/frontend/react-js/danger-icon-img.png'
    />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
