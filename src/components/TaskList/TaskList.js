import React from 'react';
import Task from '../Task/Task';


const TaskList = ({ tasks, status, deleteTask }) => {
    return (
        <section className={`${status}-tasks`}>
            <h2 className='heading'>{status === 'incomplete' ? 'Tasks to do:' : 'Completed Tasks'}</h2>
            <ul className='task-list'>
                {tasks.map(task =>
                    <Task
                        id={task.taskId}
                        text={task.description}
                        key={task.taskId}
                        complete={task.completed}
                        deleteTask={deleteTask}
                    />)}
            </ul>
        </section>
    )
}

export default TaskList
