## What Are "Local Notifications"?

- Notifications that are triggered by the installed app, for the local device

- Not sent to any other users or devices

- Notification are scheduled, delivered and handled on the same device (no server involved)
  - Reminder
  - Alarm Clock
  - Todo

---

## What are "Push Notifications"?

- Your App

  - Data might be sent to a custom backend (e.g. to store it in a database). This is **not required** to integrate push notifications thought!
  - Some Event (e.g. Chat message sent)

- Your Backend

  - Some Event

- Notification

- Your App on **another device**

**Not possible** Your app can't (directly) send notifications to other devices

- **Push Notification Server** (e.g. provided by Expo)

  - **Option 1**: Custom backend code sends request to push notification server
  - **Option 2**: App sends request to push notification server

- **Notification Message**
  - Push notification server sends push notification to registered devices.

---
