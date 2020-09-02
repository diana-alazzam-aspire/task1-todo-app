import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Alert from '@material-ui/lab/Alert';



function TasksList(props) {
    return (
        <List id='list' component="nav" aria-label="main mailbox folders">
            {props.tasksList.map(task => {
                return (
                    <ListItem>
                        <Alert severity="success"><ListItemText primary={ task} /></Alert>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default TasksList;