🍽️ Tomato - Full Stack Food Delivery App

A modern, full-stack food ordering and delivery application built with React, MongoDB, Express, and Node.js, featuring Stripe integration for secure payments, real-time order tracking, and an admin panel for managing orders.

✨ Features

✅ User Authentication – Register, login, and manage user sessions.✅ Food Ordering System – Browse menu, add items to cart, and place orders.✅ Stripe Payment Integration – Secure online payments.✅ Real-Time Order Tracking – View order status updates dynamically.✅ Admin Panel – Add, update, delete food items, and manage orders.✅ Fully Responsive UI – Optimized for desktop and mobile.

🔥 Tech Stack

Frontend: React, Vite, Tailwind CSS

Backend: Node.js, Express.js, MongoDB

Authentication: JWT, bcrypt

Payment Processing: Stripe API

State Management: React Context API

📸 Screenshots

Homepage



Food Menu & Categories



Cart Page



Delivery Information



Stripe Payment Integration



My Orders Page



Admin Panel - Food Management



Admin Panel - Orders Management



🚀 Installation & Setup

1. Clone the repository

 git clone https://github.com/yourusername/tomato-food-delivery.git
 cd tomato-food-delivery

2. Install dependencies

Frontend

 cd frontend
 npm install

Backend

 cd backend
 npm install

Admin Panel

 cd admin
 npm install

3. Set up environment variables

Create a .env file in the backend folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key

4. Start the application

Run Backend

 cd backend
 npm start

Run Frontend

 cd frontend
 npm run dev

Run Admin Panel

 cd admin
 npm run dev

🛠️ API Endpoints

Method

Endpoint

Description

POST

/api/auth/register

User Registration

POST

/api/auth/login

User Login

GET

/api/foods

Fetch all food items

POST

/api/cart/add

Add item to cart

POST

/api/orders/create

Create new order

GET

/api/orders/user/:id

Get user orders

PATCH

/api/orders/update/:id

Update order status (Admin)

🚀 Why Tomato?

Tomato is a fully functional and scalable food delivery app designed for modern needs. With its secure payment processing, real-time order tracking, and intuitive admin panel, it is an ideal solution for online food ordering businesses.

Pro Tip: Use this project in your portfolio or as a base to build a commercial food delivery service! 🚀

🤝 Contributing

If you want to contribute, please fork the repository and submit a pull request.

📜 License

This project is open-source and available under the MIT License.

Made with ❤️ by [Your Name]

