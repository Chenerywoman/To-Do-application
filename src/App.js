import {useState} from 'react';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import './App.css';

function App() {

    const [tasks, setTasks] = useState([
        {text: 'Buy cat food', completed: false, date: '2020-12-01', id: '001'}, {text: 'Buy milk', completed: true, date: '2020-12-05', id:'002'},
        {text: 'Clean the kitchen', completed: false, date: '2020-11-', id:'003'},
        {text: 'Go to sleep', completed: true, date: '2020-09-18', id:'004'},
        {text: 'Go for a walk', completed: false, date: '2020-09-18', id:'005'},
        {text: 'Do the food shop', completed: false, date: '2020-09-18', id:'006'},
    ]); 

    const deleteTask = id => {

      const updatedTasks = tasks.filter(task => task.id !== id);

      setTasks(updatedTasks);

    }

    const addTask = text => {

      const newTask = {
        text: text, 
        completed: false,
        date: '2021-12-01',
        id: '007'
      }

      const updatedTasks = [ ...tasks, newTask];
      setTasks(updatedTasks);


    }
    const incompleteTasks = tasks.filter(task => !task.completed);
    const completeTasks = tasks.filter(task => task.completed);

  return (
    <div className='App'>
    < Header taskCount={incompleteTasks.length} addTask={ addTask }/>
    <main className='all-tasks'>
       <TaskList deleteTask={ deleteTask } tasks={incompleteTasks} status='incomplete'/>
       <TaskList deleteTask={ deleteTask } tasks={completeTasks} status='complete'/>
    </main>
    </div>
  );
}

export default App;
