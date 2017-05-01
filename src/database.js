import firebase from 'firebase'

const config =  {
    apiKey: "AIzaSyD65ygnIwJ0s9geILBEDv1t6wrhfOFqdpc",
    authDomain: "owlproject-b2896.firebaseapp.com",
    databaseURL: "https://owlproject-b2896.firebaseio.com",
    projectId: "owlproject-b2896",
    storageBucket: "owlproject-b2896.appspot.com",
    messagingSenderId: "700600612702"
};

firebase.initializeApp(config);

export const database = firebase.database();
