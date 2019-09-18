import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import uuid from "uuid";

function App() {

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

  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)

  return (
    <div className="App">
      <Form 
      teamMembers={teamMembers}
      setTeamMembers={setTeamMembers}/>
      <div>
        <h2>Team Members</h2>
        {teamMembers.map( member => (
          <div>
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
