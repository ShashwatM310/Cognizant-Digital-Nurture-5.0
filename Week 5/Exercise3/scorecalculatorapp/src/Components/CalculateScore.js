import React from 'react';
import '../Stylesheets/mystyle.css';

const CalculateScore = ({ Name, School, Total, Goal }) => {
    return (
        <div className="formatstyle">
            <h1>Student Details:</h1>
            <div className="Name">
                <b>Name:</b> <span>{Name}</span>
            </div>
            <div className="School">
                <b>School:</b> <span>{School}</span>
            </div>
            <div className="Total">
                <b>Total:</b> <span>{Total}</span>
            </div>
            <div className="Goal">
                <b>Marks:</b> <span>{Goal}</span>
            </div>
            <div className="Score">
                <b>Average:</b> <span>{Math.round(Total / Goal)}</span>
            </div>
        </div>
    );
};

export default CalculateScore;
