import React, {useState} from 'react';
import {FilterForTodo, TasksType} from "./App";

export type TodolistTypeProps = {
    title: string
    tasks: Array<TasksType>
    addTask: (title: string)=> void
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterForTodo) => void
}

export function Todolist(props: TodolistTypeProps) {
    const [newTaskTitle, setNewTaskTitle] = useState('')
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={(e) => {
                    setNewTaskTitle(e.currentTarget.value)
                    }}
                />
                <button onClick={ (e) => {props.addTask(newTaskTitle)
                }}>+</button>
            </div>
            <ul>
                {props.tasks.map(t =>
                    <li key={t.id}>
                        <input type="checkbox"
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={ ()=> {
                            props.removeTask(t.id)
                            setNewTaskTitle('')
                        }}>x</button>
                    </li>
                )}
            </ul>
            <div>

                <button onClick={ () => {props.changeFilter('all')}}>All</button>
                <button onClick={ () => {props.changeFilter('active')}}>Active</button>
                <button onClick={ () => {props.changeFilter('completed')}}>Completed</button>
            </div>
        </div>
    );
};

