import React from 'react';


export default props =>
    <div>
        <div
            style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
            onClick={props.complete}>
            {props.todo.item}
        </div>
        <button onClick={props.delete}>Delete</button>
    </div>

