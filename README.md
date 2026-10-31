# 🚆 Online Railway Reservation System

## Introduction

The Online Railway Reservation System is a web-based application designed to simplify the railway ticket booking process. It provides functionality similar to the Indian Railway Ticket Booking System (IRCTC).

Users can search for trains, check availability, book tickets, manage their profiles, check PNR status, and cancel reservations.

The project also includes an administration section for managing trains, stations, and travel classes.

## ✨ Features

### 1. Train Search

Users can search for trains based on:
- Source and destination stations
- Journey date
- Train name and train number
- Travel class

The system provides suggestions while entering station names and other details.

![Train Search Page](https://github.com/krahul2024/railway-reservation/assets/76573313/11022091-f441-419f-b29c-afc0e3c4b724)

![Train Search Results](https://github.com/krahul2024/railway-reservation/assets/76573313/222aebda-715c-4f07-91d2-b8dd8a4ac162)

Search results display train names, numbers, available classes, seat availability, departure times, arrival times, and journey duration.

### 2. Train Selection and Details

Users can view complete train information, including:
- Train timetable
- Route details
- Ticket fares
- Available travel classes

![Train Details](https://github.com/krahul2024/railway-reservation/assets/76573313/c392784a-a5dd-4213-b25a-86a0b6d17e1e)

### 3. Ticket Information and User Details

Users can enter passenger information and add multiple passengers to a booking. They can also edit or remove passenger details before confirming their reservation.

![Ticket Information](https://github.com/krahul2024/railway-reservation/assets/76573313/f7cafcff-cf62-4084-90b6-2d636dcdee8d)

![Passenger Details](https://github.com/krahul2024/railway-reservation/assets/76573313/ff1bbcd7-27f7-4214-ac5d-c0ecc66e851e)

#### 3.1 User Registration and Login

Users must register and log in before booking tickets. If a user is not logged in during the booking process, they can log in and continue their booking.

![Login Alert](https://github.com/krahul2024/railway-reservation/assets/76573313/74fe06d9-86ae-42c5-ad6c-cbc8a9457c36)

![Login Page](https://github.com/krahul2024/railway-reservation/assets/76573313/b4b5f71a-629e-4de6-8bcf-bfe1a130b46a)

![Profile Page](https://github.com/krahul2024/railway-reservation/assets/76573313/11944bcf-0ad6-4c51-b0c7-05c6d7f02b82)

![Update Profile](https://github.com/krahul2024/railway-reservation/assets/76573313/3525f126-124e-4fa5-8b00-10dfc1355a23)

#### 3.2 OTP Verification

Users receive an OTP on their registered email address for secure ticket confirmation.

![Booking OTP](https://github.com/krahul2024/railway-reservation/assets/76573313/8120cdb6-81ca-4d55-b55e-72aa781f1c56)

#### 3.3 Ticket Booking and Download

After successful OTP verification, the booking is confirmed. Users receive a confirmation email and can print or download their tickets.

![Booking Confirmation](https://github.com/krahul2024/railway-reservation/assets/76573313/272b0d25-9acb-4796-be7a-e64769cdef06)

![Booking Email](https://github.com/krahul2024/railway-reservation/assets/76573313/5bcbdd6c-33ef-47f5-8867-16a2ce52847d)

![Print Tickets](https://github.com/krahul2024/railway-reservation/assets/76573313/8cfcaeab-b965-407d-b1b8-d1f5849e0672)

### 4. PNR Status and Ticket Cancellation

Users can check their PNR status to view ticket information. They can also cancel their booked tickets.

![PNR Details](https://github.com/krahul2024/railway-reservation/assets/76573313/a351617b-59ae-4bb0-bda1-ae6268aa73d2)

![Ticket Cancellation](https://github.com/krahul2024/railway-reservation/assets/76573313/0db9d2d5-bb67-4479-a6cb-a1c16a29ce4f)

![Invalid PNR](https://github.com/krahul2024/railway-reservation/assets/76573313/0ebd8218-326a-4164-a71a-7ae655214755)

### 5. Admin Management

The management section allows authorized administrators to manage trains, stations, and travel classes.

#### 5.1 Add and Update Trains

Administrators can add new trains by entering:
- Train name and number
- Operating days
- Available travel classes
- Route and station details

Existing train information can also be updated.

![Add Train](https://github.com/krahul2024/railway-reservation/assets/76573313/738e7e1e-b2d4-4839-80d0-cb5941dfee2e)

![Add Train Details](https://github.com/krahul2024/railway-reservation/assets/76573313/bc341f0b-bc83-4549-837d-e6cd91306f04)

![Update Train](https://github.com/krahul2024/railway-reservation/assets/76573313/6b990ff2-dfab-4909-a14a-db5aed765b7b)

![Update Train Details](https://github.com/krahul2024/railway-reservation/assets/76573313/0bc0933a-e460-4169-b507-a4f58edca56a)

![Updated Train Information](https://github.com/krahul2024/railway-reservation/assets/76573313/751295d0-1883-48fc-bb44-e67a8a2bf5fe)

#### 5.2 Add and Update Stations

Administrators can add new stations by providing:
- Station name
- Station address
- Station code

They can also update existing station information.

![Add Station](https://github.com/krahul2024/railway-reservation/assets/76573313/8279587e-0e6b-467c-87f6-cfd34e1e86d2)

![Update Station](https://github.com/krahul2024/railway-reservation/assets/76573313/15dff2aa-166f-421a-b6a9-27fcfc6c0c81)

#### 5.3 Add and Update Travel Classes

Administrators can create and update travel classes by specifying:
- Class name
- Seat capacity
- Fare ratio

The fare ratio is used for calculating ticket fares between stations.

![Add Class](https://github.com/krahul2024/railway-reservation/assets/76573313/3941de05-1af3-479b-8cd5-2818455f42f1)

![Update Class](https://github.com/krahul2024/railway-reservation/assets/76573313/11762c09-77c9-461c-8570-82216939a38e)

## 🛠️ Technologies Used

**Backend**
- Node.js
- Express.js

**Frontend**
- Refer to the client dependencies and source code for the exact frontend technologies.

**Other Tools**
- Git
- GitHub
- VS Code

## 📂 Project Structure

```text
Railway-Reservation/
├── client/
├── server/
│   ├── routes/
│   │   ├── hash.js
│   │   ├── html.js
│   │   ├── mail.js
│   │   ├── train.js
│   │   └── user.js
│   ├── package.json
│   ├── package-lock.json
│   └── vercel.json
├── README.md
└── .gitignore
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/shubhamkhavale/Railway-reservation.git
```

### 2. Navigate to the Project

```bash
cd Railway-reservation
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
```

### 4. Install Frontend Dependencies

Open another terminal and navigate to the client folder:

```bash
cd client
npm install
```

### 5. Run the Application

Start the frontend and backend using the scripts configured in their respective `package.json` files.

## 🔒 Security

- Keep credentials and API keys in environment variables.
- Never upload `.env` files to GitHub.
- Protect administrator access with authentication.

## 🚀 Future Improvements

- Online payment integration
- Improved ticket cancellation
- PDF ticket generation
- Live train tracking
- Enhanced security
- Responsive user interface

## 👨‍💻 Developer

**Shubham Rakesh Khole**

GitHub: [shubhamkhavale](https://github.com/shubhamkhavale)

Project Repository: [Online Railway Reservation System](https://github.com/shubhamkhavale/Railway-reservation)

## 📄 Project Status

This project is under development. Some features may require further improvements and configuration before production deployment.

## 📜 License

This project is intended for educational and learning purposes.
