import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

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

    const updateTasks = (id, title, state) => {
        setTasks((existingTasks) => {
            return existingTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, title, state };
                } else {
                    return task;
                }
            });
        });
    };

    return (
        <div className="App">
            <Navbar />

            <div className="body-container">
                <TaskList
                    title="To-Do"
                    onAddTask={addTask}
                    taskState={"To-Do"}
                    tasks={tasks.filter((t) => t.state === "To-Do")}
                    onTaskUpdate={updateTasks}
                />

                <TaskList
                    title="Doing"
                    onAddTask={addTask}
                    taskState={"Doing"}
                    tasks={tasks.filter((t) => t.state === "Doing")}
                    onTaskUpdate={updateTasks}
                />

                <TaskList
                    title="Done"
                    onAddTask={addTask}
                    taskState={"Done"}
                    tasks={tasks.filter((t) => t.state === "Done")}
                    onTaskUpdate={updateTasks}
                />
            </div>
        </div>
    );
}

export default App;
