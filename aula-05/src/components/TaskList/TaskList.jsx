import React from "react";
import "./task-list.css";
import PropTypes from "prop-types";

import TaskItem from "../TaskItem/TaskItem";

export default function TaskList(props) {
    const { title, onAddTask, tasks, onTaskUpdate, taskState, onDeleteTask } = props;

    const addTask = () => {
        onAddTask("New Task", taskState);
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
                            onTaskUpdate={onTaskUpdate}
                            onDeleteTask={onDeleteTask}
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
