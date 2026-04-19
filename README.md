# Student Tracker System (MERN Stack)

A full-stack Student Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
The application allows users to search student records via CNIC, while providing an authenticated admin panel for managing data.

---

## Overview

This project demonstrates a complete CRUD-based web application with a modern user interface and basic authentication. It is designed as a portfolio project to showcase full-stack development skills.

---

## Features

### Student Interface

* Search student records using CNIC
* Input validation for CNIC format
* Dynamic result display
* Loading states and error handling

### Admin Panel

* Protected route with login authentication
* Add new student records
* View all students
* Edit existing student data
* Delete student records
* Logout functionality

### User Interface

* Glassmorphism-based modern design
* Responsive layout
* Smooth UI transitions
* Consistent color theme

---

## Technology Stack

### Frontend

* React.js
* React Router
* Axios
* Bootstrap

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose

---

## Project Structure

```id="tree"
student-tracker/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── App.js
```

---

## Installation and Setup

### 1. Clone the Repository

```id="clone"
git clone https://github.com/your-username/student-tracker.git
cd student-tracker
```

---

### 2. Backend Setup

```id="backend"
cd backend
npm install
```

Create a `.env` file:

```id="env"
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run the backend:

```id="runbackend"
npm run dev
```

---

### 3. Frontend Setup

```id="frontend"
cd frontend
npm install
npm start
```

---

## API Endpoints

* `POST /api/students` — Create a new student
* `GET /api/students` — Retrieve all students
* `GET /api/students/:cnic` — Retrieve student by CNIC
* `PUT /api/students/:cnic` — Update student record
* `DELETE /api/students/:cnic` — Delete student

---

## Authentication

This project includes a basic frontend-based authentication system for admin access.

**Credentials:**

* Email: [admin@gmail.com](mailto:admin@gmail.com)
* Password: 123456

---

## Future Improvements

* Implement secure JWT-based authentication
* Role-based access control
* Dashboard analytics
* Deployment to cloud platforms

---

## Author

Mah Gul

---

## License

This project is for educational and portfolio purposes.
