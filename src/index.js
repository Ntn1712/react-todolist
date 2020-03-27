import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './todolist';
import TodoForm from './components/todoform';
import Todo from './components/todo';



class App extends Component {
    state = {
        todos: []
    }

    addTodo = (todo) => {
        const newTodos = [todo, ...this.state.todos];
        this.setState({
            todos: newTodos
        })
    }

    complete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            })
        })
    }

    delete = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    render() {
        return (
            <div>
                <TodoForm onSubmit={this.addTodo} />
                {this.state.todos.map(todo => (
                    <Todo key={todo.id} delete={() => this.delete(todo.id)} complete={() => this.complete(todo.id)} todo={todo} />
                ))}
                <div>
                    Todos Left: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));