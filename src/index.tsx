import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import Routes from './components/routes/Routes'; 
import * as firebase from 'firebase/app'
import { AuthProvider } from './components/providers/AuthProvider';

firebase.initializeApp({
  apiKey: "AIzaSyAcib8oq98lGlCDnNBlseVy3P5w1BlNEUY",
  authDomain: "project-2-888c1.firebaseapp.com",
  projectId: "project-2-888c1",
  storageBucket: "project-2-888c1.appspot.com", 
  messagingSenderId: "987983799802",
  appId: "1:987983799802:web:775b64dafa677e64703043",
})
 
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />   
      </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)