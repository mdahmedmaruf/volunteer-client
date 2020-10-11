import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Volunteer from './Volunteer';
import { VolunteerItemContext } from './VolunteerContext';

const VolunteerList = () => {
    const [volunteerLists, setVolunteerLists] = useContext(VolunteerItemContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleEvent = (_id) => {
        setLoggedInUser({...loggedInUser, ...volunteerLists})
        history.push(`/register/${_id}`);
    };

    
    console.log(volunteerLists);

    
    return (
        <div className="row">
            {
                volunteerLists.map(volunteerList => (
                    <div onClick={() => handleEvent(volunteerList._id)} className="col-md-3 home-volunteer-list" role="button" key={volunteerList._id} >
                    <Volunteer name={volunteerList.name} image={volunteerList.pic} id={volunteerList._id}  />
                    </div>
                ))
            }
        </div>
    );
};

export default VolunteerList;