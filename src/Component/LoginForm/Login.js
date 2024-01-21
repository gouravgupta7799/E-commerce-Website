import { useState, useRef, useContext } from 'react';
import AuthContext from '../ContextStore/Auth-Context';
import classes from './Login.module.css';
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../ContextStore/Cart-Context';

const AuthForm = () => {
  const history = useNavigate()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const authctx = useContext(AuthContext)
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false)
  const cartCtx = useContext(CartContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true)
    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAuNWVxs-q-csV5Y0J6L9racb1KePgkOVc'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAuNWVxs-q-csV5Y0J6L9racb1KePgkOVc'
    }
    fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => {
      setIsLoading(false)
      if (res.ok) {
        return res.json()
      } else {
        return res.json().then(data => {
          let errorMessage = "Authinaction failed"
          //  if(data && data.error && data.error.message)
          //{
          //errorMessage=data.error.message
          //}

          throw new Error(errorMessage)
        })
      }
    }).then((data) => {
      cartCtx.addEmail(enteredEmail)
      authctx.logIn(data.idToken);
      history('/home');
    })
      .catch((err) => {
        alert(err.message)
      })


  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler} >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>

        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'login' : 'create account'}</button>}
          {isLoading && <p>loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >

            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;