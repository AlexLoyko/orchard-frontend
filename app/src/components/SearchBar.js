import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <div className="search-bar">
                <input
                    onChange={(e) => {
                      props.onInputValueChanged(e.target.value);
                    }}
                    placeholder="Enter your cuisine"
                />
                <div
                    className="search-button"
                    onClick={props.onClick}
                >
                    Search
                </div>
            </div>
            <div className={`empty-input-war ${props.showWarning ? 'active' : 'inactive'}`}>
                    Input field cannot be empty. Enter your favorite cuisine!
            </div>
        </div>
    );
};

export default SearchBar;
