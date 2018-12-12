import Firebase from 'firebase';
  let config = {
    apiKey: "AIzaSyCqLpEOvT7ikgPq_cp6kUFsS2qDxfa5gDg",
    authDomain: "fir-app-66920.firebaseapp.com",
    databaseURL: "https://fir-app-66920.firebaseio.com",
    projectId: "fir-app-66920",
    storageBucket: "fir-app-66920.appspot.com",
    messagingSenderId: "710423857109"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();