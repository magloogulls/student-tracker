# Student Tracker System

A full-stack web application built using the MERN stack that enables efficient management and retrieval of student records. The system allows users to search students using CNIC, while providing a secure admin interface for managing data.

---

## Overview

The Student Tracker System is designed to demonstrate full-stack development skills, including REST API integration, state management, and user interface design. It provides a simple and effective solution for maintaining student data with CRUD functionality.

---

## Key Features

### Student Interface

* Search student records using CNIC
* Input validation for CNIC format
* Real-time feedback with loading and error states
* Clean and responsive UI

### Admin Panel

* Protected route with login authentication
* Add new student records
* View all students in a structured format
* Edit existing records
* Delete student entries
* Logout functionality

### User Interface

* Modern glassmorphism design
* Smooth transitions and animations
* Consistent color scheme
* Responsive layout for different screen sizes

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

```id="struct"
student-tracker/
├── student-tracker-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.js
│
├── student-tracker-backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── .gitignore
└── README.md
```

---

## Installation and Setup

### Clone Repository

```id="clone2"
git clone https://github.com/magloogulls/student-tracker.git
cd student-tracker
```

---

### Backend Setup

```id="backend2"
cd student-tracker-backend
npm install
```

Create a `.env` file:

```id="env2"
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend server:

```id="run2"
npm run dev
```

---

### Frontend Setup

```id="frontend2"
cd student-tracker-frontend
npm install
npm start
```

---

## API Endpoints

* `POST /api/students` — Create student record
* `GET /api/students` — Retrieve all students
* `GET /api/students/:cnic` — Retrieve student by CNIC
* `PUT /api/students/:cnic` — Update student
* `DELETE /api/students/:cnic` — Delete student

---

## Authentication

This project uses a simple frontend-based authentication system for admin access.

**Credentials:**

* Email: [admin@gmail.com](mailto:admin@gmail.com)
* Password: 123456

---

## Screenshots
1. Student Search Interface <br>
This page allows users to search for student records using CNIC and instantly view their details.

<img width="1849" height="758" alt="Student Search result" src="https://github.com/user-attachments/assets/debd0645-ef0a-4367-8562-375286e8aaa4" /> <br>

<img width="1861" height="773" alt="Student search page" src="https://github.com/user-attachments/assets/fa656112-d30b-4567-84d6-3f00bc1cdc9f" />

2. Admin Login <br>
A simple authentication system that restricts access to the admin panel.

<img width="1871" height="805" alt="Login Page" src="https://github.com/user-attachments/assets/407b4bdd-1f46-4130-8949-82c3c468a12e" />

4. Admin Dashboard <br>
Displays all student records with options to manage data efficiently.

<img width="1853" height="482" alt="Admin Dashboard" src="https://github.com/user-attachments/assets/9c07fbf2-2fe0-4b08-bf89-a6146f03a515" />

4. Add/Edit Student <br>
Allows admin to add new student records with proper validation.<br>
Provides functionality to update existing student information.

<img width="1858" height="560" alt="Add or Edit student form" src="https://github.com/user-attachments/assets/cfd8dae9-5b71-444b-a9ef-df42405c0f06" />


---

## Future Improvements

* Implement secure JWT-based authentication
* Add role-based access control
* Introduce dashboard analytics
* Deploy application for live access

---

## Author

Mah Gul

---

## License

This project is intended for educational and portfolio purposes.

