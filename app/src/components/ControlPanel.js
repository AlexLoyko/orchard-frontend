import React from 'react';
import SearchBar from './SearchBar'
import '../control-panel.css';

export default class ControlPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { currentInputValue: "", shouldShowWarning: false }
    }

    _onInputChange(newText) {
        this.setState({ currentInputValue: newText, shouldShowWarning: false });
    }

    _onClick() {
        if (this.state.currentInputValue.length === 0) {
            this.setState({ shouldShowWarning: true });
        }
    }

    render() {
        console.log(`Current state of input: ${this.state.currentInputValue}`)
        return(
            <div className="control-panel">
                <h1 className="title">Search NYC restaurants for your favourite cuisine</h1>
                <SearchBar
                    onInputValueChanged={(text) => {this._onInputChange(text);}}
                    onClick={() => {this._onClick();}}
                    showWarning={this.state.shouldShowWarning}
                />
            </div>
        );
    }
}
