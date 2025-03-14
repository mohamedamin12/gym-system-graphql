# Gym Management System

## Overview

The Gym Management System is a modular web application designed to facilitate the management of gym operations, including user registration, membership management, trainer information, and class scheduling. The application is built using Node.js, Express, MongoDB, and GraphQL.

## Architecture

This project follows a **modular architecture**, which separates different functionalities into distinct files and directories for better maintainability and scalability.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side applications.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **GraphQL**: Query language for APIs.
- **JSON Web Tokens (JWT)**: Authentication for secure API access.
- **dotenv**: Environment variable configuration.

## Features

- **User Management**

  - Register and log in users.
  - Retrieve user information.



- **Membership Management**

  - Create and manage different membership plans (type, price, duration).

- **Trainer Management**

  - Create and manage trainers (name, specialization, experience).


## Directory Structure

```bash
gym-system-graphql
│
├── config            # Configuration files
├── models            # Mongoose models
├── schema            # GraphQL schema files
├── resolvers         # GraphQL resolvers
├── routes            # (if applicable) REST routes
├── .env              # Environment variables
├── server.js         # Entry point of the application
└── package.json      # Project dependencies and scripts
```

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ibrahimabdalrhman/gym-system-graphql.git
   cd gym-system-graphql
   ```
2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Configure Environment Variables**
  Create a `.env` file in the root directory and add:

  ```plaintext
  MONGO_URI=your_mongo_connection_string
  JWT_SECRET=your_jwt_secret
  PORT=4000
  ```
4. **Run the Application**
    ```bash
    npm install
    ```
## API Documentation
The API can be accessed via the `/graphql` endpoint using GraphiQL, allowing you to test queries and mutations interactively.

## Future Improvements
- Implement role-based access control for different user roles.
- Add unit tests for the resolvers and models.
- Integrate a front-end application for a complete user interface.
- Enhance features such as payment processing for memberships.
## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for discussion.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments
- Node.js
- Express
- MongoDB
- Mongoose
- GraphQL
- JWT
