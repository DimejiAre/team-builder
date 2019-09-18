import React from 'react';

function TeamMember (props) {
    const {name, email, role, id, setMemberToEdit} = props;
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
            <button onClick={e => {
                e.preventDefault();
                setMemberToEdit({
                    id: id,
                    name: name,
                    email: email,
                    role: role
                });
            }}>Edit</button>
        </div>
    )
}

export default TeamMember;