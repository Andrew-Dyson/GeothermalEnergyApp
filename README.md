# Geothermal Energy App - Codeclan course final project

This app was created for an individual two week final project for Codeclan's professional software development course. It uses the following stack:
- JavaScript for frontend with React.js and node.js
- Python for backend with a Flask server
- Matplotlib library for plotting with python
- PostgresSQL database

#Data plotting page
- This page allows users to view temperature vs. depth data on a scatter plot in order to analyse the geothermal gradient of an area of interest. The data can be filtered by location and region, or new data added.

![image of apps data plotting page](https://github.com/Andrew-Dyson/GeothermalEnergyApp/blob/main/Images/Data_plotting_page.jpg?raw=true)

#Resource calculator page
- This page allows users to calculate the geothermal heat in place under the subsurface and the amount of recoverable heat. This is compared to the energy demand inputted and the difference is displayed. The user can alter the inputs on the fly to see the impact of varying each parameter.

![image of apps resource calculator page](https://github.com/Andrew-Dyson/GeothermalEnergyApp/blob/main/Images/Resource_calculator_page.jpg?raw=true)

#Instructions for running
- PIP install Python, flask, Postgres and psycopg2
- Install Node.js
- Navigate to the react project folder and run the command 'npm install' to install dependencies
- Install icons by running the commands 'npm i --save @fortawesome/fontawesome-svg-core', 'npm i --save @fortawesome/free-solid-svg-icons', 'npm i --save @fortawesome/free-regular-svg-icons', 'npm install --save @fortawesome/react-fontawesome' to use the font awesome library
- From the terminal run the command 'createdb  geothermalenergy' to create the database
- Clone the repository to create a local repository
- Navigate to the repository folder and run the command 'flask run' to start the server
- Run the command 'psql -d geothermalenergy -f geothermalenergy.sql' to create the required datebase structure
- Access http://localhost:3000/ to view the web app
- Run the console.py file to seed the database, or add your own temperature data
