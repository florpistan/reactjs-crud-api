import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Update() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckBox] = useState(false);
  const [id, setId] = useState('null');

  let history = useHistory();

  useEffect(() => {
    setId(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckBox(localStorage.getItem('Checkbox Value'));
  }, []);

  const updateApiData = () => {
    axios
      .put(`https://610dc87348beae001747b94b.mockapi.io/api/users/${id}`, {
        firstName,
        lastName,
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
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
          Update
        </Button>
      </Form>
    </div>
  );
}
