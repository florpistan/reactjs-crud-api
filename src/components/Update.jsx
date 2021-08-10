import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Update() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [comision, setComision] = useState('');
  const [checkbox, setCheckBox] = useState(false);
  const [id, setId] = useState('null');

  let history = useHistory();

  useEffect(() => {
    setId(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setComision(localStorage.getItem('Comision'));
    setCheckBox(localStorage.getItem('Checkbox Value'));
  }, []);

  const updateApiData = () => {
    axios
      .put(`https://610dc87348beae001747b94b.mockapi.io/api/students/${id}`, {
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
            placeholder="Nombre"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Apellido</label>
          <input
            placeholder="Apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Comisión:</label>
          <input
            placeholder="Comision"
            value={comision}
            onChange={(e) => setComision(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={checkbox}
            onChange={(e) => setCheckBox(!checkbox)}
          />
        </Form.Field>
        <Button
          onClick={updateApiData}
          type="submit"
          className="ui inverted purple button"
        >
          Guardar
        </Button>
      </Form>
    </div>
  );
}
