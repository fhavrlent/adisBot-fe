import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';

import { CommandsService } from './Services/CommandsService';
import {} from './Services/UserService';

import './App.css';

function App() {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    const fetchCommands = async () => {
      const { data } = await CommandsService.getAll();
      setCommands(data);
    };
    fetchCommands();
  }, []);

  return (
    <Container>
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
    </Container>
  );
}

export default App;
