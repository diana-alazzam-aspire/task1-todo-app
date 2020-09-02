import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


function Header(props) {
    return (
        <AppBar position="static">
            <Toolbar id='header'>
                <h2> To-Do APP </h2>
                {/* put condition here to check if the user is signed in or not and show login/logout and add Link to each form */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;