import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBDHE_S5XSyen1AYcFY_msaHYLjVK6SXWY',
  authDomain: 'firegram-601b7.firebaseapp.com',
  databaseURL: 'https://firegram-601b7.firebaseio.com',
  projectId: 'firegram-601b7',
  storageBucket: 'firegram-601b7.appspot.com',
  messagingSenderId: '572327191100',
  appId: '1:572327191100:web:024cb4294539f194795939'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
