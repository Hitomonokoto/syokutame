const firebase = require('firebase/app');
require("firebase/auth");
require('firebase/firestore');
require('firebase/storage');

const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export const fireauth = firebase.auth();
export const firestore = firebase.firestore();
export const firestorage = firebase.storage();

export const auth = () => {
    return new Promise((resolve, reject) => {
        fireauth.onAuthStateChanged(user => {
            resolve(user || false)
        })
    })
}

export default (context, inject) => {
    inject('fireauth', fireauth)
}