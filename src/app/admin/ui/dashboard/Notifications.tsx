import React from 'react'
import NotificationCard from './NotificationCard'
import notifications from '../../../../../public/notifications.json'

const Notifications = () => {
  const unreadNotifications = notifications
    .filter(notification => notification.status === 'unread')
    .sort((a, b) => new Date(b.dateSent).getTime() - new Date(a.dateSent).getTime())
    .slice(0, 5);

  return (
    <div>
      <h2>Notifications</h2>
      {unreadNotifications.map((notification, index) => (
        <NotificationCard
          key={index}
          name={notification.userName}
          description={notification.message}
          timestamp={notification.dateSent}
        />
      ))}
    </div>
  )
}

export default Notifications
