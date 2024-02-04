import PropTypes from 'prop-types';

export function TodoItem ({completed , title , id, toggleTodo, deleteTodo}) {
    return(
        <li>
          <label>
            <input 
            type="checkbox" 
            checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
            />
            {title}
          </label>
          <button 
          className="btn btn-danger"
          onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </li>
    )
}

TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };