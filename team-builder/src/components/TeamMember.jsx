import React from 'react';

function TeamMember (props) {
    const {name, email, role} = props;
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    )
}

export default TeamMember;