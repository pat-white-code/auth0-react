import React, { Component, createContext } from 'react';

export const Auth0Context = createContext();

// Create a provider
export class Auth0Provider extends Component {
  state = {
    message: 'TESTING MESSAGE HERE!'
  }

  render() {
    const { message } = this.state;
    const { children } = this.props;

    const configObject = { message }

    return(
      <Auth0Context.Provider value={configObject}>
        { children }
      </Auth0Context.Provider>
    )
  }
}