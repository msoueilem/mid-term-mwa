#!bin/bash

#From here we start creating the back-end
echo "start creating folders"
touch .env
touch index.js
mkdir api
mkdir api/controllers 
touch api/controllers/job.controller.js 
touch api/controllers/person.controller.js 
mkdir api/db
touch api/db/db.js
touch api/db/job.model.js
mkdir api/public
touch api/public/index.html
mkdir api/routes
touch api/routes/main.js
npm init
echo "end of creating folders"
npm i express dotenv body-parser mongoose path 
# npm install --save-dev nodemon
echo "end of installing packages"

#From here we start creating the front-end
ng new helps --skip-tests=true --skip-git=true --directory api/public/angular --defaults=true
echo "going to the front-end folder"
cd api/public/angular 
echo "creating components"
ng g c navigation
ng g c footer
ng g c home
ng g c errorPage
echo "create services"
ng g s helpData