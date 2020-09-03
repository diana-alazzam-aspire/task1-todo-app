import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SignupModal from '../auth/signup.js';
import LoginModal from '../auth/login.js';

import { If, Else, Then } from '../if/if';


function Header(props) {

  return (
    <AppBar position="static">
      <Toolbar id='header'>
        <div>
          <h2> To-Do APP </h2>
        </div>
        <If condition={props.currentUsername===''}>
          <Then>
            <div id='auth'>
              <SignupModal />
              {/* put condition here to check if the user is signed in or not and show login/logout and add Link to each form */}
              <LoginModal showTasks={props.showTasks} />
            </div>
          </Then>
          <Else>
            <div id='username'>
              <h5>{props.currentUsername}</h5>
            </div>
          </Else>
        </If>
      </Toolbar>
    </AppBar>
  )
}

export default Header;