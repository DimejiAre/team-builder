import React, { useState } from 'react';
import Form from "./components/Form";
import uuid from "uuid";
import {initialTeamMembers, initialFormData} from "./default";
import TeamMembers from './components/TeamMembers';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 30px;
  text-align: center;
  background-color: whitesmoke;
`;

function App() {

  const addFormData = e => {
    setTeamFormData({...teamFormData, [e.target.id] : e.target.value});
  };

  const addTeamMember = e => {
    debugger
    e.preventDefault();
    setTeamMembers([...teamMembers, {...teamFormData, id: uuid()}]);
    setTeamFormData(initialFormData)
  };

  const getMemberToEdit = (e, name, email, role, id) => {
    const member = {
      name: name,
      email: email,
      role: role,
      id: id
    }
    e.preventDefault();
    setMemberToEdit(member)
    setTeamFormData(member)
  }

  const editTeamMember = e => {
    e.preventDefault();
    const newTeam = teamMembers.map( member =>{
      if(memberToEdit.id === member.id){
        member.name = teamFormData.name;
        member.email = teamFormData.email;
        member.role = teamFormData.role;
      }
      return member
    })
    setTeamFormData(initialFormData);
    setMemberToEdit(null);
    setTeamMembers(newTeam);
  }

  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [teamFormData, setTeamFormData] = useState(initialFormData)
  const [memberToEdit, setMemberToEdit] = useState(null);

  return (
    <StyledDiv>
      <h2>Team Form</h2>
      <Form 
      teamFormData={teamFormData}
      addFormData={addFormData}
      addTeamMember={addTeamMember}
      memberToEdit={memberToEdit}
      setTeamFormData={setTeamFormData}
      editTeamMember={editTeamMember}/>
      <h2>Team Members</h2>
      <TeamMembers 
      teamMembers={teamMembers}
      setMemberToEdit={getMemberToEdit}/>
    </StyledDiv>
  );
}

export default App;
