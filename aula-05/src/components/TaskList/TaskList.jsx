import React, { useState } from "react";
import "./TaskList.css";
import PropTypes from 'prop-types';

export default function TaskList(props) {
    const [count, setCount] = useState(0);
    const { title } = props;

    const increment = () => {
        setCount((currentCount) => {
            return currentCount + 1;
        })
    }

    return (
        <div className="list-container">
            <div className="list-title" > {title} </div>

            <div className="list-content">
                {count}
                <button onClick={increment} >Increment</button>
            </div>
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired
}
