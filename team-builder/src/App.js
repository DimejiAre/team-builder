import React, { useState } from 'react';
import Form from "./components/Form";
import uuid from "uuid";
import {initialTeamMembers, initialFormData} from "./default";
import TeamMembers from './components/TeamMembers';

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

  return (
    <div className="App">
      <Form 
      teamFormData={teamFormData}
      addFormData={addFormData}
      addTeamMember={addTeamMember}/>
      <TeamMembers 
      teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
