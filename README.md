# [ETE Project] MERN Blog App

## Functionalities

- **Secure Authentication:** Implement a robust user authentication system for enhanced security.
- **Effortless Blog Creation:** Quickly generate and publish your blogs through an intuitive and user-friendly interface.
- **Blog Deletion:** Easily eliminate unwanted blogs with a straightforward delete option.
- **Blog Updates:** Seamlessly edit and update your blogs to reflect evolving content.
- **Discover Other Users' Blogs:** Explore and read blogs published by fellow users for a diverse and engaging experience.

## TODOs

```js
/**
 * ** CODE THIS!!! **
 * 
 * ## File - Header.js ##
 * 
 * Code a header with following things
 * 
 * Signup/Login ( goto => /login )
 * 
 * fields for login ( email, password )
 * fields for signup ( name, email, password )
 * 
 * login and store userId to localStorage then access it to perform other operations
 * 
 * when userId is available replace login/signup button with Logout and delete userId stored in localStorage on logout
 * 
 * ************************
 * 
 * ** THINGS ALREADY CODED **
 * 
 * Show all blogs ( /blogs )
 * Add a blog ( /blogs/add )
 * My Blogs ( /myBlogs )
 * My Blogs by ID ( /myBlogs/:id )
 * Delete a Blog ( goto => /myBlogs & hit the Delete button )
 * 
 * ** Things you _can_ improve
 * 
 * Add tailwind in this and make the structure of blogs look better
 * Use a black and white color scheme
 * 
 */
```

> NOTE: Backend will require your mongo URI create a `.env` file in `server` directory and add `MONGO_URI="<your-mongo-uri-here>"`

## Getting Started

To initiate this project, follow these steps:

1. **Fork and Clone the Repository:**
   - Begin by forking and cloning this repository to your local machine.

2. **Install Dependencies:**
   - Navigate to the project directory and install the required dependencies for both the backend and frontend:

     ```bash
     cd ete-project
     cd server && yarn
     cd client && yarn
     ```

3. **Configure Database Connection:**
   - Set up the database connection in the backend. You can opt for MongoDB Atlas or a local MongoDB server.

4. **Start Backend Server:**
   - Launch the backend server:

     ```bash
     cd server && yarn start
     ```

5. **Start Frontend Application:**
   - Initiate the frontend application:

     ```bash
     cd client && yarn start
     ```

6. **Access the Application:**
   - Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the application.
