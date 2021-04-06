import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDo_ThBfyJrQugMcI-kJYjWiop5QomielA",
    authDomain: "wily-app-a03df.firebaseapp.com",
    projectId: "wily-app-a03df",
    storageBucket: "wily-app-a03df.appspot.com",
    messagingSenderId: "105665761881",
    appId: "1:105665761881:web:deecf48e8a571de8afd748"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 export default firebase.firestore()