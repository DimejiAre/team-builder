import React from 'react';

function Form(props){

    const {teamFormData, addFormData} = props;

    return (
        <form>
            <label htmlFor='nameInput'>Name</label>
            <input value={teamFormData.nameInput} onChange={addFormData} id='nameInput' type='text' />
            <label htmlFor='email'>Email</label>
            <input value={teamFormData.emailInput} onChange={addFormData} id='emailInput' type='text' />
            <label htmlFor='roleInput'>Role</label>
            <input value={teamFormData.roleInput} onChange={addFormData} id='roleInput' type='text' />
            <button onClick={e => e.preventDefault()}>Submit</button>
        </form>
    )
}

export default Form;