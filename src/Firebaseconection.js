import firebase from 'firebase';
let config = {
apiKey: "AIzaSyDg8VDeM3v8LamLY40XfqmAP9lNtah-R8M",
  authDomain: "database-jb.firebaseapp.com",
  databaseURL: "https://database-jb.firebaseio.com",
  projectId: "database-jb",
  storageBucket: "database-jb.appspot.com",
  messagingSenderId: "872949347991",
  appId: "1:872949347991:web:5fd92cc6cb8105f9"
};
firebase.initializeApp(config);

export default firebase;