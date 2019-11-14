import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '1rem',
            borderBottom: '.1rem #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    buttonStyle = () => {
        return {
            background: '#ff0000',
            padding: '5px 10px',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'right'
        }
    }

    render() {
        const {id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) }/> {' '} 
                {title}
                <button style = { this.buttonStyle() } onClick={ this.props.deleteTodo.bind(this, id) }>x</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}


export default TodoItem
