import './Task.css'

const Task = ({ id, text, complete, deleteTask }) => {

    return (
        <li className={`task ${complete ? 'task--complete' : ''}`}>
            <p className='task__text'>{text}</p>
            {complete === false && <button className='button'>Complete</button>}
            <button onClick={() => deleteTask(id)} className='button'>Delete</button>
        </li>
    )
}

export default Task
