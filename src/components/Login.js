import { useState ,useRef,useContext} from 'react';
import AuthContext from '../store/auth-context';

import classes from './Login.module.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setLoding] = useState (false)
    const inputEmail=useRef()
    const inputPassword=useRef();
    const authCtx = useContext(AuthContext);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
   
  };
  const handelSubmit = (event)=>{
    event.preventDefault();
    const inputEmailValue=inputEmail.current.value;
    const inputPasswordValue=inputPassword.current.value;
    // console.log(inputEmailValue,inputPasswordValue)
    setLoding(true);
    let url;
    if(isLogin){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDHAQzIrJzoMAPL40v-7rbjIoK7Je0Z5Po';
     
    }else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDHAQzIrJzoMAPL40v-7rbjIoK7Je0Z5Po'
      
    }
    fetch(url,
      {
        method:'POST',
        body:JSON.stringify({
          email:inputEmailValue,
          password:inputPasswordValue,
          returnSecureToken:true
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }
      ).then(res=>{
        setLoding(false)
        if(res.ok){
          return res.json();
        }else{
        
         return res.json().then(data=>{
            // .... show the error
            let errorMmessage='Authentication failed';
            if(data && data.error && data.error.message){
              errorMmessage=data.error.message
            }
           
           throw new Error(errorMmessage)
          })
        }
      })
      .then(data=>{ 
        authCtx.login(data.idToken)
        console.log(data)
      })
      .catch(err=>{
        alert(err.message)
      })
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handelSubmit}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={inputEmail} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={inputPassword} required />
        </div>
        <div className={classes.actions}>
         {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button> }
         {isLoading && <p>...Loading</p>}
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

export default Login;
