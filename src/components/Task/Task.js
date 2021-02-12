import './Task.css'

const Task = (props) => {
    return (
        <li className={`task ${props.complete ? 'task--complete' : ''}`}>
            <p className="task__text">This is a task that needs to be done</p>
            {props.complete === false && <button className="button">Complete</button>}
            <button className="button">Delete</button>
        </li>
    )
}

export default Task
