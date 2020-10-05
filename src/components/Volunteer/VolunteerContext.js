import React, { createContext, useState } from 'react';
import { volunteerInfo } from './Data';

export const VolunteerItemContext = createContext();

export const VolunteerContext = (props) => {
    const [volunteerLists, setVolunteerLists] = useState(volunteerInfo);
    return (
        <VolunteerItemContext.Provider value={[volunteerLists, setVolunteerLists]}>
            {props.children}
        </VolunteerItemContext.Provider>
    );
};
