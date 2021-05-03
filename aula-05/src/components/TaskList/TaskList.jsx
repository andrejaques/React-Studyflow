import React from "react";
import "./TaskList.css";
import PropTypes from 'prop-types'

export default function TaskList(props) {
    const { title } = props;

    return (
        <div className="list-container">
            <div> {title} </div>
            <div className="list-content"></div>
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired
}