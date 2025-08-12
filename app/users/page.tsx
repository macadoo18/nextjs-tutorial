import React from 'react';

const UsersPage = async () => {
  interface User {
    id: number;
    name: string;
    email: string;
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default UsersPage;
