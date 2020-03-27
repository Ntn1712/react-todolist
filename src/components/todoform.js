import React, { Component } from 'react';
import shortid from 'shortid';

export default class TodoForm extends Component {

    state = {
        item: ""
    }

    change = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            item: this.state.item,
            complete: false
        });
        this.setState({
            item: ""
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.submit}>
                    <input name="item" value={this.state.item} onChange={this.change} placeholder="Todo item" />
                    <button onClick={this.submit}>Submit</button>
                </form>
            </div>
        )
    }
}