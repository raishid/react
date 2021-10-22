import React from 'react'
import PropTypes from 'prop-types'

export const TodoItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
            <li 
                className="list-group-item"
            >
                <p 
                    className={` ${ todo.done && 'complete' } `}
                    onClick={ () => { handleToggle(todo.id) } }
                >
                    { index + 1}. { todo.desc }</p>
                <button
                    className="btn btn-danger"
                    onClick={ () => handleDelete( todo.id ) }
                >
                    Borrar
                </button>
            </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
    handleToggle: PropTypes.func,
    handleDelete: PropTypes.func
}
