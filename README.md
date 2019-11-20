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




