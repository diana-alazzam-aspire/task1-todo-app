import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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

function SignupModal(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [usersState, setUsers] = useState([]);


    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const formHandler = (e) => {
        e.preventDefault();

        const { username, password } = e.target;
        const userData = {username:username.value, password:password.value, tasks:[]}
        const usersList = usersState.slice();
        usersList.push(userData);
        setUsers(usersList);
        localStorage.setItem('users', JSON.stringify(usersList));
        e.target.reset();
        handleClose();
    }
    useEffect(() => {
        let savedUsers = JSON.parse(localStorage.getItem('users'));
        if (savedUsers) setUsers(savedUsers);
    }, [])
    return (
        <div>
            <Button onClick={handleOpen} variant="contained">Sign-up</Button>

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
                            <p>Please Sign-up to add new tasks</p>
                            <TextField required label="Username" name='username' variant="outlined" />
                            <TextField required type='password' label="Password" name='password' variant="outlined" />
                            <Button variant="contained" color="primary" type='submit'>
                                Sign-up
                            </Button>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default SignupModal;