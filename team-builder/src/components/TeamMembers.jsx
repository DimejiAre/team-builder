import React from 'react';
import TeamMember from './TeamMember';

function TeamMembers (props){
    const {setMemberToEdit, teamMembers} = props;

    return (
        <div>
            <h2>Team Members</h2>
            {teamMembers.map( member => (
            <TeamMember
            key={member.id} 
            name={member.name}
            email={member.email}
            role={member.role}
            id={member.id}
            setMemberToEdit={setMemberToEdit}/>
            ))}
        </div>  
    )
}

export default TeamMembers;