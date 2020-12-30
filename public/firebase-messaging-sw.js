importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js");

firebase.initializeApp({
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
});

const initMessaging = firebase.messaging();
