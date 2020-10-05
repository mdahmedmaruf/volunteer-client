import React, { useContext } from 'react';
import Volunteer from './Volunteer';
import { VolunteerItemContext } from './VolunteerContext';

const VolunteerList = () => {
    const [volunteerLists, setVolunteerLists] = useContext(VolunteerItemContext);
    return (
        <div className="row">
            {
                volunteerLists.map(volunteerList => (
                    <Volunteer name={volunteerList.name} image={volunteerList.pic} key={volunteerList.id} />
                ))
            }
        </div>
    );
};

export default VolunteerList;