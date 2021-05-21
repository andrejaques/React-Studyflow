import React from "react";
import PropTypes from "prop-types";

import plusIcon from "../../images/plus-icon.svg";
import "./task-list.css";

import TaskItem from "../TaskItem/TaskItem";

export default function TaskList(props) {
    const { title, onAddTask, tasks, onTaskUpdate, taskState, onDeleteTask } =
        props;

    const addTask = () => {
        onAddTask("New Task", taskState);
    };

    return (
        <div className="task-list">
            <div className="task-title"> {title} </div>

            <div className="task-content">
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

            {tasks.length === 0 && <div className="empty-list" >Empty List</div>}

            <button className="btn" onClick={addTask}>
                <img src={plusIcon} alt="plus" />
                Add Task
            </button>
            </div>
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
};
