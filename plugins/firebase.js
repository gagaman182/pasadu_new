import * as firebase from "firebase";

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyAqMto63tocbsWfiiR9PTSJtdFfybl3OoI",
    authDomain: "vueauth-da839.firebaseapp.com",
    databaseURL: "https://vueauth-da839.firebaseio.com",
    projectId: "vueauth-da839",
    storageBucket: "vueauth-da839.appspot.com",
    messagingSenderId: "409450455474",
    appId: "1:409450455474:web:e7a0da7da433e0ed9c04ab",
    measurementId: "G-VM6QLVTJWD"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();