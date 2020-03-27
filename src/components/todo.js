import React from 'react';


export default props =>
    <li >
        <span className="spn" onClick={props.delete}><i className="fas fa-trash"></i></span>
        <span style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
    onClick={props.complete}>{props.todo.item}</span>
    </li>

