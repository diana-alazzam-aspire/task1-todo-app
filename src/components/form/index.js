import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function Form (props){
    let minHeight = '80vh';
    if (props.tasksList.length){
        minHeight = '20vh';
    }
    const formHandler = (e) =>{
        e.preventDefault();
        props.addTask(e.target.task.value);
        e.target.reset()
    }
    return (
        <form onSubmit={formHandler} id='form' style={{minHeight}}>
            <TextField label="Add task" name='task' variant="outlined" />
            <Button variant="contained" color="primary" type='submit'>
              Add
            </Button>
        </form>
    )
}

export default Form;