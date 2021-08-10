import { React, useState, useEffect } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Read() {
  const [ApiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get('https://610dc87348beae001747b94b.mockapi.io/api/students')
      .then((response) => {
        setApiData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, comision, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Comision', comision);
    localStorage.setItem('Checkbox Value', checkbox);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://610dc87348beae001747b94b.mockapi.io/api/students/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get('https://610dc87348beae001747b94b.mockapi.io/api/students')
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  return (
    <div>
      <Table className="ui purple celled table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Comision</th>
            <th>PC Propia</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {ApiData.map((data) => {
            console.log(data);
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.comision}</Table.Cell>
                <Table.Cell>{data.checkbox ? 'Yes' : 'No'}</Table.Cell>

                <Table.Cell>
                  <Link to="/update">
                    <Button
                      onClick={() => setData(data)}
                      className="ui inverted purple button"
                    >
                      Editar
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={() => onDelete(data.id)}
                    className="ui inverted red button"
                  >
                    Eliminar
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
