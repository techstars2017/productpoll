var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

// Leave out Storage
//require("firebase/storage");

const config = {
  apiKey: "AIzaSyDBYjoLuTO01bbIis7iOabMnjom1WcwVd4",
  authDomain: "productpoll-7127e.firebaseapp.com",
  databaseURL: "https://productpoll-7127e.firebaseio.com",
  projectId: "productpoll-7127e",
  storageBucket: "productpoll-7127e.appspot.com",
  messagingSenderId: "373606469125"
};

const base = firebase.initializeApp(config);

const database = base.database();

const auth = base.auth();

module.exports = {
  database,
  auth
};
