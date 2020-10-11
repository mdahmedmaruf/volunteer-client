import React from 'react';

const colorClassNames = ["bg-primary", "bg-danger", "bg-warning","bg-info"];
const Volunteer = ({name, image}) => {
    return (
        <>
            <img src={image} alt=""/>
            <p className={colorClassNames[Math.floor(Math.random() * 4)]} style={{padding: '15px', borderRadius: '5px', color: '#FFFFFF'}}> {name} </p>
        </>
    );
};

export default Volunteer;