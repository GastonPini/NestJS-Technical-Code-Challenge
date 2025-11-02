import axios from 'axios';

const users = [
  { email: 'user1@example.com', name: 'User One', password: '123456' },
  { email: 'user2@example.com', name: 'User Two', password: 'abcdef' },
  { email: 'user3@example.com', name: 'User Three', password: 'qwerty' }
];

async function createUsers() {
  for (const u of users) {
    try {
      const res = await axios.post('http://localhost:3000/auth/register', u, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('Usuario creado:', res.data);
    } catch (err: any) {
      console.error('Error creando usuario:', u.email, err.response?.data || err.message);
    }
  }
}

createUsers();