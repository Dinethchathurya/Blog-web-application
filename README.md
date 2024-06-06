## Blog-web-application

This is a simple Blog web application built using Node.js, Express.js, and EJS. The application allows users to create, view, update, and delete blog posts. Note that the posts do not persist between sessions as this version does not use a database.

## Features

1. **Post Creation**: Users can create new posts.
2. **Post Viewing**: The home page allows users to view all their posts.
3. **Post Update/Delete**: Users can edit and delete posts as needed.

## Technical Requirements

- **Node.js & Express.js**: The application is a web server built using Node.js and Express.js. Express.js handles routing and middleware.
- **EJS**: EJS is used as the templating engine to generate dynamic HTML based on the application's state.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/Dinethchathurya/Blog-web-application.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Blog-web-application
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. run this command ro run:
     ```sh
    nodemon index.js

3. Open your web browser and navigate to `http://localhost:3000`.


## Project Structure


## Routes

- `GET /`: Home page to view all posts
- `GET /newpost`: Page to create a new post
- `POST /create`: Endpoint to submit a new post
- `GET /editPost`: Page to edit an existing post
- `POST /edit`: Endpoint to submit updates to a post
- `POST /delete`: Endpoint to delete a post

I did't use traditional way in routing in edit and delete.

## Contributing

Feel free to fork this project and submit pull requests. Any contributions, whether they be bug fixes, feature additions, or improvements to code or documentation, are welcome.

## License

This project is open-source and available under the MIT License.

## Acknowledgments

- Thanks to the Node.js and Express.js communities for their great tools and documentation.
- Thanks to the EJS team for their powerful templating engine.
