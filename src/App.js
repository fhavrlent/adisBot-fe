import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import { CommandsService } from './Services/CommandsService';

import './App.css';

function App() {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    const fetchCommands = async () => {
      const { data } = await CommandsService.getAll();
      setCommands(data.data);
    };
    fetchCommands();
  }, []);

  return (
    <Table striped bordered hover responsive variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Command</th>
          <th>Command response</th>
        </tr>
      </thead>
      <tbody>
        {commands.map((command, index) => (
          <tr>
            <td>{index}</td>
            <td>!{command.command}</td>
            <td>{command.response}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default App;
