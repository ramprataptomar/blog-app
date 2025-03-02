# MERN Stack Blog App

## 📌 Project Overview
This is a **full-stack blog application** built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). The application allows users to **create, read, update, and delete (CRUD)** blog posts with authentication and rich-text editing features.

## 🚀 Features
- ✍️ **User Authentication** (Signup/Login using Firebase Authentication)
- 📝 **Create, Read, Update, and Delete Blogs**
- 🔍 **Search and Filter Blogs**
- 🏷️ **Categories and Tags for Posts**
- 💬 **Comments and Likes System**
- 🖼️ **Upload Images for Blog Posts**
- 🎨 **Responsive and Intuitive UI**
- 🗄️ **MongoDB Database for Storage**
- 🔥 **Firebase for Authentication & Messaging**

## 🛠️ Tech Stack
| Technology | Description |
|------------|------------|
| React.js   | Frontend UI |
| Node.js    | Backend Server |
| Express.js | API Development |
| MongoDB    | Database |
| Firebase   | Authentication & Messaging |
| Tailwind CSS | Styling |
| Redux      | State Management |
| JWT        | User Authentication |

## 📂 Folder Structure
```
mern-blog-app/
│── backend/        # Node.js + Express backend
│   ├── models/     # Database models
│   ├── routes/     # API routes
│   ├── controllers/ # Business logic
│   ├── config/     # Configuration files
│── frontend/       # React.js frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── pages/        # Application pages
│   │   ├── redux/        # State management
│   │   ├── utils/        # Utility functions
│── .env          # Environment variables
│── package.json  # Dependencies
│── README.md     # Project Documentation
```

## ⚙️ Installation

1️⃣ Clone the repository:
```sh
git clone https://github.com/yourusername/mern-blog-app.git
cd mern-blog-app
```

2️⃣ Install dependencies for both frontend and backend:
```sh
cd backend
npm install
cd ../frontend
npm install
```

3️⃣ Set up your **.env** file in the `backend/` directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
FIREBASE_API_KEY=your_firebase_api_key
```

4️⃣ Start the backend server:
```sh
cd backend
npm start
```

5️⃣ Start the frontend React app:
```sh
cd frontend
npm start
```

## 🔗 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/auth/signup` | User registration |
| POST   | `/api/auth/login` | User login |
| GET    | `/api/posts` | Get all blog posts |
| GET    | `/api/posts/:id` | Get a single blog post |
| POST   | `/api/posts` | Create a new post |
| PUT    | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

## 📸 Screenshots
![Home Page](https://via.placeholder.com/800x400)
![Blog Editor](https://via.placeholder.com/800x400)

## 🤝 Contribution
Contributions are welcome! Feel free to **fork** this repo and submit a **pull request**.

## 📜 License
This project is **MIT Licensed**.

---

⭐ **If you like this project, don't forget to give it a star!** ⭐
