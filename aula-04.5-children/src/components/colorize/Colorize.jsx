import React, { Component } from "react";
import './Colorize.css'

class Colorize extends Component {
    constructor() {
        super();

        this.state = {
            isTextChecked: false,
            isIconChecked: false,
        };

        this.handleCheckedText = this.handleCheckedText.bind(this);
        this.handleCheckedIcon = this.handleCheckedIcon.bind(this);
    }

    handleCheckedText() {
        this.setState({ isTextChecked: !this.state.isTextChecked });
    }

    handleCheckedIcon() {
        this.setState({ isIconChecked: !this.state.isIconChecked });
    }


    render() {
        return (
            <div className="checkbox-container">
                <div>
                    <label>Text</label>
                    <input type="checkbox" onChange={this.handleCheckedText} />
                </div>
                <div>
                    <label>Icon</label>
                    <input type="checkbox" onChange={this.handleCheckedIcon} />
                </div>
            </div>
        );
    }
}

export default Colorize;
