import React from 'react';

const Option = (props) =>(
        <div className="option">
            <p>{props.count}. {props.option}</p>
            <button 
                className = "button button--link"
                onClick={(e) =>{
                    return props.handleDeleteOption(props.option)
                }}>
            Remove</button>
        </div>
    )
export default Option;