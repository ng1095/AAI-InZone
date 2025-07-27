# Geofence-Based Attendance App

This is a React Native-based mobile app integrated with a MERN (MongoDB, Express, React Native, Node.js) backend that enables real-time, geofence-enabled attendance tracking. The system is designed for both users (employees) and admins to ensure accurate, location-based check-in and check-out, along with role-based access and analytics.

## ✨ Features

### For Users:
- 📍 Geofence-based check-in/check-out
- ✅ Automatic validation of location within assigned office boundary
- 👤 View personal attendance records
- 📸 Upload/update profile picture

### For Admins:
- 🧭 Add, edit, and delete geofence regions for departments
- 👥 View and manage employee profiles
- 🔐 Approve/decline signup requests in real-time
- 📊 View daily and monthly attendance analytics (charts, stats)
- 🗂 Filter records by date, department, and role
- 🖼 View employee profile images

## 🛠 Tech Stack

### Frontend (Mobile):
- React Native
- React Navigation
- React Native Maps
- Axios
- Lottie
- Chart Kit (for graphs)
- Element Dropdown / Dropdown Picker
- Custom Animated UI components

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- Nodemailer (for email alerts)

## 🔒 Authentication & Authorization
- Role-based access (admin/user)
- Only approved users can log in
- Admins can manage access rights
