import React, {useContext} from 'react';
import 'bulma/css/bulma.css';
import { Auth0Context } from './contexts/auth0-context';
import { Auth0Client } from '@auth0/auth0-spa-js';

function App() {
  const {isLoading, user, loginWithRedirect} = useContext(Auth0Context);

  return (
    <div className='hero is-info is-fullheight'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          { !isLoading && !user && (
            <div>
              <h1>Click Button to Login!</h1>
              <button onClick={loginWithRedirect} className='button is-danger'>
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
