# Frontend News App Project

## App Summary

This app is a news article site built responsively using React during a project sprint. The app uses a backend RESTful API created for my backend project using PostgreSQL as the database. The app has been styled with custom CSS using a 'mobile-first' approach. The backend API project can be viewed here: https://github.com/cono07/BE-News-Project.

## Hosted App

The app is hosted on Netlify at: https://cono07-news-app.netlify.app/

## App Functionality

Making use of CRUD, the app has the following functionality:

- View a list of articles by topic
- Sort articles by various parameters, including: Topic, Title, Comments, Date Created, Votes, Author
- View a single article
- Vote on an article
- Post a comment on an article
- View article comments
- Delete a comment belonging to the logged in user
- Login as a user and view the user's profile

## Technology

- React
- Axios for API calls
- react-spinners - npm package for loading spinners
- react-toastify - npm package for toast popups
- Custom CSS styling
- Netlify (hosting)

## Additional

- Error handling of incorrect paths
- Optimistic rendering of article likes
- Fully responsive, mobile-first design

## Local Setup

1. Fork and clone the repo
2. Run npm install to install dependencies
3. Run npm start to run the development build and open the site locally

## Minimum Requirements

- Node.js v17.2.0

Note: Earlier versions may work but have not been tested
