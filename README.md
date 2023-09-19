# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Description

I used the existing api https://api-ninjas.com/api/cars so some fields
which the car should not contain since they are not in the response.
When you enter the name of a car or a set of letters into the input,
all possible names contained in this set are searched. 
The state manager used RTK to store data, and used redux saga to make requests to the server.
