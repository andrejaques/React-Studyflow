import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

const task = {
    id: 0,
    title: "New Task",
    state: "waiting",
};

let idAcc = 0;
const generateID = () => {
    idAcc = idAcc + 1;
    return idAcc;
};

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (title, state) => {
        const newTask = {
            id: generateID(),
            title,
            state,
        };
        setTasks((existingTasks) => {
            return [...existingTasks, newTask];
        });
    };

    return (
        <div className="App">
            <Navbar />

            <div className="body-container">
                <TaskList title="To-Do" onAddTask={addTask} tasks={tasks} />

                <TaskList title="Doing" onAddTask={addTask} tasks={tasks} />

                <TaskList title="Done" onAddTask={addTask} tasks={tasks} />
            </div>
        </div>
    );
}

export default App;
