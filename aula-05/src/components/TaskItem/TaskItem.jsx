import React, { useState } from "react";
import PropTypes from "prop-types";
import "./task-item.css";

export default function TaskItem({
    id,
    title,
    taskState,
    onTaskUpdate,
    onDeleteTask,
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editableTitle, setEditableTitle] = useState(title);

    const onTitleChange = (e) => {
        const newTitle = e.target.value;
        setEditableTitle(newTitle);
        onTaskUpdate(id, newTitle, taskState);
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            setIsEditing(false);

            if (editableTitle.length === 0) {
                onDeleteTask(id);
            }
        }
    };

    const onTaskStateChange = (e) => {
        onTaskUpdate(id, title, e.target.value);
    };

    if (isEditing) {
        return (
            <div className="task-item">
                <input
                type="text"
                value={editableTitle}
                onChange={onTitleChange}
                onKeyPress={onKeyPress}
                />
            </div>
        );
    } else {
        return (
            <div className="task-item">
                <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>
                <select onChange={onTaskStateChange} value={taskState}>
                    <option value="To-Do">To-Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </div>
        );
    }
}

TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired,
};
