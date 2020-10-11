import React, { createContext, useEffect, useState } from 'react';

export const VolunteerItemContext = createContext();

export const VolunteerContext = (props) => {
    const [volunteerLists, setVolunteerLists] = useState([]);

    useEffect(() => {
        fetch('https://vast-river-71348.herokuapp.com/volunteerList')
        .then(res => res.json())
        .then(data => setVolunteerLists(data));
    }, []);

    return (
        <VolunteerItemContext.Provider value={[volunteerLists, setVolunteerLists]}>
            {props.children}
        </VolunteerItemContext.Provider>
    );
};
