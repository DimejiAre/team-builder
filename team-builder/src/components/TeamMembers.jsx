import React from 'react';
import TeamMember from './TeamMember';

function TeamMembers ({teamMembers}){

    return (
        <div>
            <h2>Team Members</h2>
            {teamMembers.map( member => (
            <TeamMember
            key={member.id} 
            name={member.name}
            email={member.email}
            role={member.role}/>
            ))}
        </div>  
    )
}

export default TeamMembers;