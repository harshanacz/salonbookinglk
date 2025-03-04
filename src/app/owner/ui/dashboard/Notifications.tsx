import React from 'react'
import NotificationCard from './NotificationCard'
import notifications from '../../../../data/notifications.json'

const Notifications = () => {
  return (
    <div >
       {notifications.map((notification,index)=>(
              <NotificationCard
              key={index}
              name={notification.name}
              description={notification.description}
              timestamp={notification.timestamp}
              />
            ))}
    </div>
  )
}

export default Notifications
