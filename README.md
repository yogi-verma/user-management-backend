🧭 User Access Management System (MERN Stack)
A role-based access management system with authentication, software listing, access request workflow, and role-specific dashboards.

🚀 Tech Stack
Layer	            Technology
1. Backend	           Node.js, Express.js, MongoDB, Mongoose
2. Frontend	           React.js, Tailwind CSS
3. Auth	               JWT, bcrypt
4. Tooling	           dotenv, nodemon, concurrently

👥 User Roles
Role	                   Capabilities
1. Employee	              Register, login, request access to software
2. Manager	              View and approve/reject software access requests
3. Admin	                Create software, view requests, full access

🧩 Features
1. User registration and login (JWT-based)
2. Role-based dashboards and redirection
3. Admin can create and list software\
4. Employees can submit access requests
5. Managers can approve or reject requests
6. MongoDB schemas for users, software, and requests

⚙️ Setup Instructions
📦 Backend Setup (/backend)
1. cd backend
2. npm install
3. Create a .env file in /backend with the following:
     a. PORT=5000
     b. MONGO_URI=mongodb://localhost:27017/accessDB
     c. JWT_SECRET=your_jwt_secret
Then run the server:
     nodemon server.js
