import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';
export default function App() {
  const API_URL = 'https://dummyjson.com/users';
  const [data, setData] = useState([]);
  let getUsers = async () => {
    await fetch(url)
      .then((i) => i.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };
  async function getData() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Data Response is success');
      }
      const resp = await response.json();
      console.log(resp);
      setData(resp.users);
    } catch (error) {
      console.error('There was an error:', error);
    }
  }

  useEffect(() => {
    getUsers();
    getData();
  }, []);
  return (
    <div className="app">
      <div>
        <h2>User Data</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SL</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i) => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.firstName}</td>

                <td>{i.lastName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
