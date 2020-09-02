import React from 'react';


function Form (props){
    const formHandler = (e) =>{
        e.preventDefault();
        props.addTask(e.target.task.value);
        e.target.reset()
    }
    return (
        <form onSubmit={formHandler}>
            <label>
                Task
                <input type='text' name='task'/>
            </label>
            <button>Add</button>
        </form>
    )
}

export default Form;