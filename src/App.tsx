import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

function App() {
    const titleTodo = 'What to learn'
    const tasks = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
        { id: 4, title: 'Redux', isDone: false }
    ]
    return (
        <div className="App">
            <Todolist
                title={titleTodo}
                tasks={tasks}
            />
        </div>
    );
}

export default App;
