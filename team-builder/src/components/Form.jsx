import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin: 0 auto;
    padding: 30px;
    border: 1px solid black;

    input {
    height: 20px;
    }

    label {
    margin-top: 10px;
    }

    button {
    background-color: cornflowerblue;
    margin-top: 15px;
    height: 35px;
    border-radius: 5px;
    }
`;

function Form(props){

    const {teamFormData, addFormData, addTeamMember, memberToEdit, editTeamMember} = props;

    return (
        <StyledForm>
            <label htmlFor='name'>Name</label>
            <input value={teamFormData.name} onChange={addFormData} id='name' type='text' />
            <label htmlFor='email'>Email</label>
            <input value={teamFormData.email} onChange={addFormData} id='email' type='text' />
            <label htmlFor='role'>Role</label>
            <input value={teamFormData.role} onChange={addFormData} id='role' type='text' />
            <button onClick={e => {
                debugger
                if(memberToEdit){
                    editTeamMember(e)
                }else{
                    addTeamMember(e)
                }
            }}>Submit</button>
        </StyledForm>
    )
}

export default Form;