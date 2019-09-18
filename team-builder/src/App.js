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
    e.preventDefault();
    setTeamMembers([...teamMembers, {...teamFormData, id: uuid()}]);
    setTeamFormData(initialFormData)
  };

  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [teamFormData, setTeamFormData] = useState(initialFormData)
  const [memberToEdit, setMemberToEdit] = useState({});

  return (
    <StyledDiv>
      <h2>Team Form</h2>
      <Form 
      teamFormData={teamFormData}
      addFormData={addFormData}
      addTeamMember={addTeamMember}
      memberToEdit={memberToEdit}
      setTeamFormData={setTeamFormData}/>
      <h2>Team Members</h2>
      <TeamMembers 
      teamMembers={teamMembers}
      setMemberToEdit={setMemberToEdit}/>
    </StyledDiv>
  );
}

export default App;
