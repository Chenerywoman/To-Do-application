import AddTask from './components/AddTask/AddTask';
import Task from './components/Task/Task';
import './App.css';

function App() {
  return (
    <div className="App">
     <header className="header">
        <h1 className="heading">To Do!</h1>
        <AddTask />
        <p className="outstanding-tasks">You have 3 tasks to complete</p>
    </header>
    <main className="all-tasks">
        <section className="incomplete-tasks">
            <h2 className="heading">Tasks to do:</h2>
            <ul className="task-list">
                <Task complete={false}/>
                <Task complete={false}/>
                <Task complete={false}/> 
            </ul>
        </section>
        <section className="complete-tasks">
            <h2 className="heading">Complete tasks:</h2>
            <ul className="task-list">
               <Task complete={true}/>
               <Task complete={true}/>
            </ul>
        </section>
    </main>
    </div>
  );
}

export default App;
