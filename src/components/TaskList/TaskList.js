import React from 'react';
import Task from '../Task/Task';


const TaskList = ({tasks, status}) => {
    return (
        <section className={`${status}-tasks`}>
            <h2 className="heading">{status === "incomplete" ? "Tasks to do:" : "Completed Tasks"}</h2>
            <ul className="task-list">
                {tasks.map(task => <Task text={task.text} key={task.id} complete={task.completed}/>)}
            </ul>
        </section>
    )
}

export default TaskList
