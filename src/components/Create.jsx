import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Form, Checkbox, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [comision, setComision] = useState('');
  const [checkbox, setCheckBox] = useState(false);
  
  let history = useHistory();

  const postData = () => {
    axios
      .post('https://610dc87348beae001747b94b.mockapi.io/api/students', {
        firstName,
        lastName,
        comision,
        checkbox,
      })
      .then(() => {
        history.push('/read');
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nombre</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="name"
            placeholder="Nombre"
          />
        </Form.Field>
        <Form.Field>
          <label>Apellido</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastName"
            placeholder="Apellido"
          />
        </Form.Field>
        <Form.Field>
          <label>Comisión: </label>
          <input
            onChange={(e) => setComision(e.target.value)}
            type="text"
            name="comision"
            placeholder="Comision"
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            onChange={(e) => setCheckBox(!checkbox)}
            label="Tiene PC propia?"
          />
        </Form.Field>
        <Button onClick={postData} type="submit" className="ui purple button">
          Dar de Alta
        </Button>
      </Form>
    </div>
  );
}
