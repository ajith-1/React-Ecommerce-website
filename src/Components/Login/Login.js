import React,{useState} from 'react';
import './Login.css';
import login from './login.png';
import signup from './signup.png';

const Login = () => {
 
  const [isLogin, setIsLogin] = useState(true);

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className='titleImg'>{isLogin ? <div><h2>Welcome Back</h2><img src={login} alt='login'/></div> : <div><h2>Create an Account</h2><img src={signup} alt='login'/></div>}</div>
        <form className="auth-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          {!isLogin && <input type="password" placeholder="Confirm Password" />}
          <button>{isLogin ? 'Login' : 'Sign Up'}</button>
          <p onClick={switchForm}>
          {isLogin ? 'Don’t have an account? Sign up here.' : 'Already have an account? Log in here.'}
        </p>
        </form>
        
      </div>
    </div>
  );
  
}
export default Login;
