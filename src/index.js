import "./_index.scss"


import React from "react"
import ReactDOM from "react-dom"
import App from "./scenes/App"
import { BrowserRouter as Router } from "react-router-dom"


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "portfolio-4a516.firebaseapp.com",
  projectId: "portfolio-4a516",
  storageBucket: "portfolio-4a516.appspot.com",
  messagingSenderId: "647895238347",
  appId: "1:647895238347:web:f11e39324398a63a0abd4e",
  measurementId: "G-GM3LD0VHX9"
};

const app = initializeApp(firebaseConfig);
// const analytics = 
getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
