import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCi-CChycQQK46-acwNXkhHxVi6ZhFO2tk",
    authDomain: "recetas-react-b6c7f.firebaseapp.com",
    databaseURL: "https://recetas-react-b6c7f-default-rtdb.firebaseio.com",
    projectId: "recetas-react-b6c7f",
    storageBucket: "recetas-react-b6c7f.appspot.com",
    messagingSenderId: "806641563351",
    appId: "1:806641563351:web:81dd1e60e64ff934b12292",
    measurementId: "G-ZWE51Z5LTD"
};
let app = Firebase.initializeApp(config);
export const db = app.database();