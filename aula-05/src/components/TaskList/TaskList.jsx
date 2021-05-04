import React from "react";
import "./TaskList.css";
import PropTypes from "prop-types";

import TaskItem from "../TaskItem/TaskItem";

export default function TaskList(props) {
    const { title, onAddTask, tasks } = props;

    const addTask = () => {
        onAddTask("New Task", "To-Do");
    };

    return (
        <div className="list-container">
            <div className="list-title"> {title} </div>

            <div className="list-content">
                {tasks.map((task) => {
                    return (
                        <TaskItem
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            taskState={task.state}
                        />
                    );
                })}
            </div>
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
};
