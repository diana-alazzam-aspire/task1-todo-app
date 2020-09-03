import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function Form (props){
    const formHandler = (e) =>{
        e.preventDefault();
        props.addTask(e.target.task.value);
        e.target.reset()
    }
    return (
        <form onSubmit={formHandler} id='form'>
            <TextField label="Add task" name='task' variant="outlined" />
            <Button variant="contained" color="primary" type='submit'>
              Add
            </Button>
        </form>
    )
}

export default Form;