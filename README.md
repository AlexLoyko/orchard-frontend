# orchard-frontend

NOTE: Hosted version of the app:
http://159.65.172.142:3000

# IMPORTANT:
In order to run properly, enable CORS Allow-Control-Allow-Origin.<br/>
In Google Chrome, can be done easily by a plugin: 
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

# NOTE: 
TO MAKE THE APP RUN LOCALLY WITH THE BACKEND, changes need to be made. <br/>

1) Clone https://github.com/AlexLoyko/orchard-backend
2) Follow the instructions in that repo to get the backend to run locally.
3) Change the line <br/> `const BEST_PLACES_BY_GRADE_AND_CUISINE_API = 'http://159.65.172.142:5000/best-places' in components/ControlPanel.js`<br/> to point to localhost and the appropriate port such as "http://localhost:PORT/best-places"

# To install:
1. Clone the repo
2. Run npm install (was tested on Node 8, lower versions my not be supported) 
3. If your version of Node is lower, consider using nvm.
4. npm start.

This will start the UI for the project.

Type in the name of the cuisine, and the markers for the best places will appear on the map!

# My implementation of the data visualization of the NYC restaurant inspection data.
![Top 10 places on the map for Thai cuisine](https://github.com/AlexLoyko/orchard-frontend/blob/master/pic1.png)
![Backend Response on Thai](https://github.com/AlexLoyko/orchard-frontend/blob/master/pic2.png)
![Top 10 places on the map for Russian cuisine](https://github.com/AlexLoyko/orchard-frontend/blob/master/pic3.png)
![Top 10 places on the map for Italian cuisine](https://github.com/AlexLoyko/orchard-frontend/blob/master/pic4.png)
