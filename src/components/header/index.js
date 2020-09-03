import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SignupModal from '../auth/signup.js';
import LoginModal from '../auth/login.js';
import Button from '@material-ui/core/Button';


import { If, Else, Then } from '../if/if';


function Header(props) {
  return (
    <AppBar position="static">
      <Toolbar id='header'>
        <div>
          <h2> To-Do APP </h2>
        </div>
        <If condition={!props.currentUser.username}>
          <Then>
            <div id='auth'>
              <SignupModal />
              <LoginModal addCurrentUser={props.addCurrentUser} />
            </div>
          </Then>
          <Else>
            <div id='username'>
              <h3>{props.currentUser.username}</h3>
            </div>
            <Button onClick={props.logout} variant="contained">Logout</Button>
          </Else>
        </If>
      </Toolbar>
    </AppBar>
  )
}

export default Header;