import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyACDSeqiSViGtV4qibLnoU_CDdJzstc8gE',
  authDomain: 'medium-a00b1.firebaseapp.com',
  projectId: 'medium-a00b1',
  storageBucket: 'medium-a00b1.appspot.com',
  messagingSenderId: '167696912280',
  appId: '1:167696912280:web:71689046cc746dff1665ed',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();

export { storage, firebase as default };
