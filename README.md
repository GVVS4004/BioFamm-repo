Blog Post API

This is a REST API that allows users to read blog posts on our website. The API provides two endpoints:

    GET /posts: Retrieves all the blog posts and displays them in a user-friendly format. It includes filtering options based on categories and tags, as well as pagination.
    GET /posts/:id: Retrieves a specific blog post by its ID and displays the details in an easy-to-read format.

Getting Started
Prerequisites

To run this project, you will need to have the following installed on your machine:

    Node.js
    npm
    MongoDB

Installation

Clone this repository to your local machine:

Goto Terminal

    git clone https://github.com/GVVS4004/BioFamm-repo.git

Install the project dependencies:

Goto Terminal

    cd BioFamm-repo
    npm install

Start the server:


    node index.js
  This will start the server on http://localhost:3000.

Usage
Retrieving all blog posts

To retrieve all blog posts, make a GET request to http://localhost:3000/posts. You can optionally include query parameters to filter the results:

    category: Filter by category.
    tag: Filter by tag.
    page: Specify which page of results to return. The default value is 1.
    limit: Specify the maximum number of results to return per page. The default value is 7.

Example:

Goto Browser

    GET http://localhost:3000/posts?category=Technology&tag=JavaScript&page=1&limit=5

This will retrieve the second page of results, with a limit of 5 results per page, that match the category "Technology" and tag "JavaScript".
Retrieving a specific blog post

To retrieve a specific blog post, make a GET request to http://localhost:3000/posts/:id, where :id is the ID of the blog post.

Example:

Goto Browser

    GET http://localhost:3000/posts/64206da5be99bf159f3d12ea

This will retrieve the blog post with ID "64206da5be99bf159f3d12ea".
Rate Limiting

This API implements rate limiting to prevent spam. Each IP is limited to 100 requests per minute.
Database

This project uses MongoDB to store the blog posts. The database connection is established in index.js using the Mongoose library.
Technologies Used

    Node.js
    Express
    MongoDB
    Mongoose
