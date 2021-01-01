import firebase from 'firebase/app';
import 'firebase/messaging';
import { subscriberToTopic } from './subscriberToTopic';

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
};

export const initFirebase = () => {
    firebase.initializeApp(config);
}

export const permissionToReceiveNotification = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        // const token = await messaging.getToken();
        subscriberToTopic('some-topic');
        // console.log('token : ',token);
        // return token;
    } catch (error) {
        console.error(error);
    }
}