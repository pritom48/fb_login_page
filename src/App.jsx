import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='log-container'>
        <div className="login-container">
          <div className="logo">facebook</div>
          <div className="login-box">
            <h2>Log in to Facebook</h2>
            <form>
              <input type="text" placeholder="Email address or phone number" />
              <input type="password" placeholder="Password" />
              <button type="submit">Log in</button>
            </form>
            <a href="#">Forgotten account?</a>
            <div className="separator">
              <span>or</span>
            </div>
            <button className="create-account">Create new account</button>
          </div>
        </div>
        <footer>
          <div className="languages">
            English (UK) ગુજરાતી हिन्दी मराठी ਪੰਜਾਬੀ தமிழ் తెలుగు বাংলা മലയാളം Español
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;

