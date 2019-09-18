import React from 'react';
import styled from 'styled-components';

const StyledMember = styled.div`
    border: 1px solid black;
    padding: 20px;
    margin-bottom: 20px;
    width: 25vw;
    border-radius: 40px;
    background-color: cornflowerblue;
    color: black;
    text-align: left;
    white-space: wrap;
    
    button {
        width: 80px;
        height: 40px;
        font-size: 1rem;
        border-radius: 20px;
        position: relative;
        left: 40%;
    }
`;

function TeamMember (props) {
    const {name, email, role, id, setMemberToEdit} = props;
    return (
        <StyledMember>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
            <button onClick={e => setMemberToEdit(e, name, email, role, id)}>Edit</button>
        </StyledMember>
    )
}

export default TeamMember;