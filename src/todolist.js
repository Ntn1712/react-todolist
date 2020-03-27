import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/todoform';


export default class TodoList extends Component {
    render(){
        return (
            <div>
                <TodoForm />
            </div>
        )
    }
}