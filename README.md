# MEVN
MEVN Tutorial

## INITIAL COMMIT
npm init to start package.json.
npm i express cors body-parser mongodb
npm i -D nodemon
on package.json change scripts to:
    "scripts": {
        "start": "node server/index.js",
        "dev": "nodemon server/index.js"
    },
Create server folder and index.js in it

Create .gitignore file and in it, type
node_modules
.DS_Store
.env

## SERVER INITIALIZED
In the server index.js
require express, body-parser and cors.
initialize the app with express
add middleware
create the port 
make the app to listen to the port

## ROUTER AND API INITIALIZED
Create in server routes/api/posts.js
In it initialize express and express.router
Create get, add, update and delete api's.
    route.get('/ruta', action)
export module

In index.js
Require the file posts.js to bring the router and the api's
Add to the middleware
    app.use('/api/posts', posts), where posts is the module imported from posts.js






