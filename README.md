# Goal Setting MERN App

Welcome to the Goal Setting MERN App repository! This is a full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) for setting and tracking your personal and professional goals.

## Features

- **User Authentication:** Secure user registration and login functionality.
- **Goal Management:** Create, update, and delete goals with ease.
- **Progress Tracking:** Log and visualize your progress over time.
- **Responsive Design:** A user-friendly interface that works seamlessly across devices.

## Tech Stack

- **Frontend:**
  - React: A JavaScript library for building user interfaces.
  - Redux: State management for React applications.
  - Axios: HTTP client for making API requests.

- **Backend:**
  - Node.js: A JavaScript runtime for server-side development.
  - Express: A web application framework for Node.js.
  - MongoDB: A NoSQL database for storing data.

- **Authentication:**
  - JSON Web Tokens (JWT): Securely transmit information between parties.

## Getting Started

1. Clone the repository: `git clone https://github.com/benjahmin-koenigsberg/goal_setting_MERN_app.git`
2. Navigate to the project directory: `cd goal_setting_MERN_app`
3. Install dependencies:
   - For the backend, run `cd server && npm install`
   - For the frontend, run `cd client && npm install`
4. Start the backend server: `cd server && npm start`
5. Start the frontend development server: `cd client && npm start`
6. Open your browser and visit `http://localhost:3000`

## Project Structure

```
|-- client
|   |-- public
|   |-- src
|       |-- components
|       |-- pages
|       |-- App.js
|   |-- package.json
|-- server
|   |-- config
|   |-- controllers
|   |-- middleware
|   |-- models
|   |-- routes
|   |-- index.js
|   |-- package.json
|-- .gitignore
|-- README.md
|-- etc.
```

- **`client`:** Frontend application built with React.
- **`server`:** Backend server built with Node.js and Express.
- **`client/public`:** Static assets and HTML template for the React app.
- **`client/src`:** React components and application logic.
- **`server/config`:** Configuration files, such as database connection settings.
- **`server/controllers`:** Controller functions for handling HTTP requests.
- **`server/middleware`:** Custom middleware functions.
- **`server/models`:** MongoDB schema models.
- **`server/routes`:** Express routes for different API endpoints.
- **`.gitignore`:** Specifies files/folders to be ignored by Git.

## Shout out

Brad Traversy!!
I built this project coding along to this tutorial

####Learn The MERN Stack

https://youtube.com/playlist?list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm&si=w-x1erIFgkfN7ls1


Feel free to explore, modify, and use this project for your goal-setting journey! 🚀
