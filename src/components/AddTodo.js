import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    addTodoStyle = () => {
        return {
            flex: '10',
            padding: '.5rem'
        }
    }

    btnStyle = () => {
        return {
            flex: '1'
        }
    }

    formStyle = () => {
        return {
            display: 'flex',
            padding: '.5rem 1rem 1rem 1rem'
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });
    render() {
        return (
            <form onSubmit={ this.onSubmit }style={ this.formStyle() }>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Add Todo.."
                    style={ this.addTodoStyle() }
                    value={ this.state.title }
                    onChange={ this.onChange }
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn"
                    style={ this.btnStyle() }
                />
            </form>
        )
    }
}

export default AddTodo;
