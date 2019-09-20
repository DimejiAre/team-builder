import React from 'react';
import TeamMember from './TeamMember';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

function TeamMembers (props){
    const {setMemberToEdit, teamMembers} = props;

    return (
        <StyledDiv>
            {teamMembers.map( member => (
            <TeamMember
            key={member.id} 
            name={member.name}
            email={member.email}
            role={member.role}
            id={member.id}
            setMemberToEdit={setMemberToEdit}/>
            ))}
        </StyledDiv>  
    )
}

export default TeamMembers;