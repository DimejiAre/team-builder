import React from 'react';

function Form(props){

    const {teamMembers, setTeamMembers} = props;

    return (
        <form>
            <label htmlFor='nameInput'>Name</label>
            <input id='nameInput' type='text' />
            <label htmlFor='emailInput'>Email</label>
            <input id='emailInput' type='text' />
            <label htmlFor='roleInput'>Role</label>
            <input id='roleInput' type='text' />
            <button>Submit</button>
        </form>
    )
}

export default Form;