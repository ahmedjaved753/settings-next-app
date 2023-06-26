"use client";

import { useState, type ReactElement } from "react";
import notificationsConfig from "@/lib/notificationsConfig";
import NotificationItem from "./NotificationItem";

function Notifications() {
  const [notifications, setNotifications] = useState(notificationsConfig);

  const handleCheckedChange = (id: string, checked: boolean) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, checked } : notification
      )
    );
  };

  return notifications.map((notification) => (
    <NotificationItem
      key={notification.id}
      notification={notification}
      onCheckedChange={handleCheckedChange}
    />
  ));
}

export default Notifications;
