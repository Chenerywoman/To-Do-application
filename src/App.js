import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import './App.css';

function App() {

  // const [tasks, setTasks] = useState([
  //     {text: 'Buy cat food', completed: false, date: '2020-12-01', id: '001'}, {text: 'Buy milk', completed: true, date: '2020-12-05', id:'002'},
  //     {text: 'Clean the kitchen', completed: false, date: '2020-11-', id:'003'},
  //     {text: 'Go to sleep', completed: true, date: '2020-09-18', id:'004'},
  //     {text: 'Go for a walk', completed: false, date: '2020-09-18', id:'005'},
  //     {text: 'Do the food shop', completed: false, date: '2020-09-18', id:'006'},
  // ]); 

  const [tasks, setTasks] = useState([]);
  const userId = '299982cb-82aa-4a7b-9fef-e92fd7abd41b';

  useEffect(() => {
    // initiate a get request to api endpoint
    axios.get(`https://qyyetfu7di.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/tasks`)
      // promise resolves - update state of tasks
      .then(response => setTasks(response.data))
      // if error - log out error
      .catch(err => console.log(err))
  }, [])

  const deleteTask = id => {

    const updatedTasks = tasks.filter(task => task.taskId !== id);

    setTasks(updatedTasks);

  }

  const addTask = text => {

    const newTask = {
      description: text,
      completed: false,
    }

    // make a post request & pass in new task as the body

    axios.post(`https://qyyetfu7di.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/tasks`, newTask)
      // if get request is successful, add a get request for all the tasks
      .then(() => axios.get(`https://qyyetfu7di.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/tasks`))
      // if get request is successful update tasks state will tasks array
      .then(response => setTasks(response.data))
      // if error, log out the error
      .catch(error => console.log(error))
  }

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completeTasks = tasks.filter(task => task.completed);

  return (
    <div className='App'>
      < Header taskCount={incompleteTasks.length} addTask={addTask} />
      <main className='all-tasks'>
        <TaskList deleteTask={deleteTask} tasks={incompleteTasks} status='incomplete' />
        <TaskList deleteTask={deleteTask} tasks={completeTasks} status='complete' />
      </main>
    </div>
  );
}

export default App;
