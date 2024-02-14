# Dev Radar

This Project is meant to help people find developers based on location and technologies mastered. It was developed during **Rocketseat's 10th OmniStack Week** using NodeJS, React Native and ReactJS.

<img src="https://github.com/nicolastmaia/dev-radar/assets/45211638/8406fcc7-fdc6-4864-af59-c14d135d6c0a" height="350"/>
<img src="https://github.com/nicolastmaia/dev-radar/assets/45211638/362fae87-de01-40dc-a529-d5a656f71b9c" height="350"/>

&nbsp;

This project consists of three folders: **backend**, **web**, and **mobile**.

- The **backend** is a NodeJS server integrated to a MongoDB instance;
- The **web** part is written in ReactJS and is where you register the devs, entering information like name, location, technologies mastered and github user page;
- The **mobile** part is in React Native and shows the devs in your area as pins on a map.

## Requirements
- NodeJS version 12.22.12;
- MongoDB instance version 4.2.25; (install with all the default settings)
- If using an android emulator, use Android 8.1 (API 27);

## Running the project
1. If you're using a local MongoDB instance without credentials, skip to step 3;
2. If you're using a remote MongoDB instance or if you need to enter credentials, go to /backend/src/index.js, change the 'connectionString' constant to the credential provided by MongoDB.
3. Go to /mobile/services/api.js and change the 'baseUrl' constant to the IP address of the machine running the backend service;
4. Go to /backend, run `npm i` to install the dependencies and then run the server with the command `npm run dev`;
5. Go to /web, run `npm i` to install the dependencies and then run `npm start`;
6. Go to /mobile and run `npm i` to install the dependencies. Make sure you have an android device connected or an android emulator running,  run `npx expo start`, and then press 'a' to run it on the android device.
