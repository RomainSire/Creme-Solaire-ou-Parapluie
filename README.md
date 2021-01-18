# creme-solaire-ou-parapluie

## Context
I started to studdy Vue.Js, and the best way to learn is to code an app!  
This is a simple but fun weather app'. I tried to create something "UX friendly", and got inspiration on Dribbble.  
The app is now online, and it's name is: [Crème Solaire ou Parapluie](https://creme-solaire-ou-parapluie.web.app/)

## Used technology
I built the project with Vue CLI.  
And even if the project is really simple, I tried to use (at least a little bit) all the Vue features : router, vuex for storing common data, direct communication between parent/child components, automatic linter, etc.  

## Used API for the backend:
1. Google Places API was used to:
  - get the geographical coordinates from the location's name
  - get a background picture of the location
2. OpenWeather API was used to:
  - get the current weather data
  - get the forecast weather for the next hours


## Installation on localhost
1. clone the project
2. install dependancies
```
npm install
```
3. start the development server
```
npm run serve
```
4. the app should be accessible on localhost:8080
