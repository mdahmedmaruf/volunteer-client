import React from 'react';

const Volunteer = ({name, image}) => {
    return (
        <div className="col-md-3">
            <img style={{height: '300px'}} src={image} alt=""/>
            <p style={{backgroundColor: 'tomato', padding: '15px', borderRadius: '5px', color: '#FFFFFF'}}> {name} </p>
        </div>
    );
};

export default Volunteer;