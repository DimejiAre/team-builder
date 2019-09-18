import uuid from "uuid";

export const initialFormData = {
    name: '',
    email: '',
    role: ''
  }

export const initialTeamMembers = [
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