# Welcome to BaseCamp Planner
BaseCamp Planner is a front-end application that I created for my front-end capstone project in the first 3-months of my time in the Nashville Software School full-stack developer bootcamp.

## About BaseCamp Planner
Organizing an outdoors recreation roadtrip can be difficult, especially if you are unfamiliar with the area of travel. There can be an overwhelming amount of places to stay and activities to fit into your schedule. This applicaton is intended to make the planning process effective and efficient for a user, while also providing a fun and explorative user experieince.

## Features
* User account data
* Explore Base Camp locations and hiking trails using an interactive map
* Create/save multiple trip plans and add BaseCamp locations/dates
* Add hiking trails to Base Camp plans that are saved on a trip
* Integrated Google Map feature to more thouroughly investigate preloaded Base Camp locations
* Edit and cancel trips/plans
* Manage user account info
  
## Useage Note!!
* Data input for this application is still in progress. Only the following states on the map have full functionality:
  - California, Arizona, Utah, North Carolina, Maine.
* State Maps with only base camp data, but no hikes include:
  - Washington, Oregon, Nevada, Alaska, Hawaii, Montana, Wyoming, Colorado, New Mexico, Tennessee, New York
* This application requires a secret API key for Google Maps to function properly. If you clone this application, it will not contain an API key and the google maps feature will not load, but the application will still work.

## Built With
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NODE.js](	https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MUI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![CSS](	https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

## Installations
This project requires node.js, please install first if necessary 

#### API
  First, you will need to set up the JSON Server API to run this application
  1. Clone the following repo and cd into the directory:
  ```bash
  git@github.com:ericsteedly/basecamp-api.git
  ```
  2. The API requires that json server is installed, in the directory run:
  ```bash
  npm install json-server
  ```
  3. You can open the project in your code editor to view the data. Use the following script to activate the server:
  ```bash
  json-server database.json -p 8088 --watch
  ```
  You should see the following response in the terminal and the server should be active:
  ```bash
  
  \{^_^}/ hi!

  Loading database.json
  Done

  Resources
  http://localhost:8088/users
  http://localhost:8088/states
  http://localhost:8088/baseCamps
  http://localhost:8088/hikes
  http://localhost:8088/trips
  http://localhost:8088/tripBaseCamps
  http://localhost:8088/tripHikes

  Home
  http://localhost:8088

  Type s + enter at any time to create a snapshot of the database
  Watching...
  ```

#### Client
  Now you can set up the client application
  
  4. Clone the following repo and cd into the directory:
  ```bash
  git@github.com:ericsteedly/basecamp-planner.git
  ```
  5. You can open the project in your code editor
  6. Install dependenceies with `npm install`
  7. Run the application in development mode with with `npm start`
  8. If it does not open automatically, Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  With the app running, you can now register as a new user via the link on the log in page and begin exploring the maps and building trips!

## Future Updates
* Continued addition of hiking data for states
* Continued completion of all state maps
* Application deployment, secret api key for google maps stored in env variable
* Build a complete server via Django Framework and SQLite
* Integrate Google Auth and Google Calendar API


## Author
[@ericsteedly](https://github.com/ericsteedly)
