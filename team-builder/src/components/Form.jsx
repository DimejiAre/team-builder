import React from 'react';

function Form(props){

    const {teamFormData, addFormData, addTeamMember} = props;

    return (
        <form>
            <label htmlFor='name'>Name</label>
            <input value={teamFormData.name} onChange={addFormData} id='name' type='text' />
            <label htmlFor='email'>Email</label>
            <input value={teamFormData.email} onChange={addFormData} id='email' type='text' />
            <label htmlFor='role'>Role</label>
            <input value={teamFormData.role} onChange={addFormData} id='role' type='text' />
            <button onClick={addTeamMember}>Submit</button>
        </form>
    )
}

export default Form;