import React, { useContext } from 'react';
import logo from '../../logo.png';
import google from '../../google.png';
import './Login.css';
import { Link } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {name: displayName, email: email, photo: photoURL} 
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    };

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
        .then((idToken) => {
            sessionStorage.setItem('token', idToken);
        })
        .catch(() => {

        });
    };
    return (
        <div className="login-container">
            <div className="login-logo">
                <Link to="/"><img src={logo} alt=""/></Link>
            </div>
            <div className="google-login">
                <h4>Login With</h4>
                <button onClick={handleGoogleSignIn} className="login-button"><span><img className="img-fluid" src={google} alt=""/></span>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;