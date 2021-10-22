import React from 'react'
import { TodoItem } from './todoItem'
import PropTypes from 'prop-types'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todo, i) => (
                    <TodoItem
                        key={ todo.id }
                        todo={ todo }
                        index={ i }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    handleDelete: PropTypes.func,
    handleToggle: PropTypes.func
}


