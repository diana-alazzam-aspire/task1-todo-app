import React from 'react';


function List (props){
    return (
        <div>
            {props.tasksList.map(task=> {
                return <p>{task}</p>
            })}
        </div>
    )
}

export default List;