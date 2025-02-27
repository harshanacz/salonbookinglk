import React from "react";

interface Notification {
  name: string;
  description: string;
  timestamp: string;
}
const NotificationCard: React.FC<Notification> = ({
  name,
  description,
  timestamp,
}) => {
  const formattedDate = new Date(timestamp).toLocaleString();
  return (
    <div className="rounded-lg! bg-[var(--pageBackground)] p-2 w-full h-auto min-h-[80px] mb-3 overflow-hidden">
      <div className="font-normal text-sm text-black">{name}</div>
      <div className="text-sm text-gray-600 ml-2">{description}</div>
      <div className="text-xs text-gray-400 ml-2 mt-2 float-right">
        {formattedDate}
      </div>
    </div>
  );
};
export default NotificationCard;
