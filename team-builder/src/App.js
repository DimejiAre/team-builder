import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import uuid from "uuid";

function App() {

  const initialFormData = {
    nameInput: '',
    emailInput: '',
    roleInput: ''
  }

  const initialTeamMembers = [
    {
      id: uuid(),
      name: 'Melqui Pereira',
      email: 'melquipereira@lambda.com',
      role: 'frontend engineer'
    },
    {
      id: uuid(),
      name: 'Austin Walela',
      email: 'austinwalela@lambda.com',
      role: 'backend engineer'
    }
  ]

  const addFormData = e => {
    setTeamFormData({...teamFormData, [e.target.id] : e.target.value});
  };

  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [teamFormData, setTeamFormData] = useState(initialFormData)

  return (
    <div className="App">
      <Form 
      teamFormData={teamFormData}
      addFormData={addFormData}/>
      <div>
        <h2>Team Members</h2>
        {teamMembers.map( member => (
          <div key={member.id}>
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
