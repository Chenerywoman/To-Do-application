import React from 'react';
import AddTask from '../AddTask/AddTask';

const Header = ({taskCount}) => {
    return (
        <header className="header">
        <h1 className="heading">To Do!</h1>
        <AddTask />
        <p className="outstanding-tasks">You have {taskCount} tasks to complete</p>
    </header>
    )
}

export default Header
