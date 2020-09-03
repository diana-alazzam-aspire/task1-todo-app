import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

import { If, Then } from '../if/if';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function LoginModal(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const formHandler = (e) => {
        e.preventDefault();

        const { username, password } = e.target;
        let users = JSON.parse(localStorage.getItem('users'));
        let loggedUser = [];
        users && users.forEach(user => {
            if ((username.value === user.username) && (password.value === user.password)) {
                loggedUser = [user];
                setAlert(false);
            }
        })
        if (loggedUser.length) {
            props.addCurrentUser(loggedUser[0])
            e.target.reset();
            handleClose();
        } else {
            setAlert(true);
        }
    }
    return (
        <div>
            <Button onClick={handleOpen} variant="contained">Login</Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                style={{ backgroundColor: 'white' }}
            >

                <Fade in={open}>
                    <div id='modal-box'>
                        <form onSubmit={formHandler} id='login-form'>
                            <p>Please Login to add new tasks</p>
                            <If condition={alert}>
                                <Then>
                                    <Alert severity="error"> Incorrect</Alert>
                                </Then>
                            </If>
                            <TextField required label="Username" name='username' variant="outlined" />
                            <TextField required type='password' label="Password" name='password' variant="outlined" />
                            <Button variant="contained" color="primary" type='submit'>
                                Login
                            </Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default LoginModal;