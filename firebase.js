import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAANvIAP0EaLzyItMPcoihiFC1EEdVzpmA',
  authDomain: 'whatsapp-ad1b5.firebaseapp.com',
  projectId: 'whatsapp-ad1b5',
  storageBucket: 'whatsapp-ad1b5.appspot.com',
  messagingSenderId: '144746383040',
  appId: '1:144746383040:web:8176da84f706041d12cf25',
  measurementId: 'G-0BGK0C5EFL',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();


  const db = app.firestore();
  const auth = app.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export {db,auth,provider};

