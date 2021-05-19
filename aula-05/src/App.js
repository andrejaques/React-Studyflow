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

    const deleteTask = (id) => {
        setTasks((existingTasks) => {
            return existingTasks.filter(task => task.id !== id);
        })
    }

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
                    onDeleteTask={deleteTask}
                />

                <TaskList
                    title="Doing"
                    onAddTask={addTask}
                    taskState={"Doing"}
                    tasks={tasks.filter((t) => t.state === "Doing")}
                    onTaskUpdate={updateTasks}
                    onDeleteTask={deleteTask}
                />

                <TaskList
                    title="Done"
                    onAddTask={addTask}
                    taskState={"Done"}
                    tasks={tasks.filter((t) => t.state === "Done")}
                    onTaskUpdate={updateTasks}
                    onDeleteTask={deleteTask}
                    />
            </div>
        </div>
    );
}

export default App;
