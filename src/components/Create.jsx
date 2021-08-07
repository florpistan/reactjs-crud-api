import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Form, Checkbox, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckBox] = useState(false);
  let history = useHistory();

  const postData = () => {
    axios
      .post('https://610dc87348beae001747b94b.mockapi.io/api/users', {
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
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="name"
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            onChange={(e) => setCheckBox(!checkbox)}
            label="I agree to the Terms and Conditions"
          />
        </Form.Field>
        <Button onClick={postData} type="submit" className="ui purple button">
          Submit
        </Button>
      </Form>
    </div>
  );
}
