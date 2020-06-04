import React, { useState } from 'react';
import {
  CardHeader,
  Card,
  CardContent,
  Button,
  TextField,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ItemList from './ItemList';

const TodoCard = () => {
  const [item, setItem] = useState('');
  const [newItem, setNewItem] = useState([]);

  const onAddItem = (event) => {
    event.preventDefault();
    setNewItem((prevItem) => {
      return [...prevItem, item];
    });
    setItem('');
  };

  return (
    <div>
      <Card style={{ width: '400px', height: '400px', marginTop: '40%' }}>
        <CardContent>
          <center>
            <h3>Todo List</h3>

            <TextField
              id="standard-basic"
              label="Add Todo"
              value={item}
              onChange={(event) => setItem(event.target.value)}
              required
            />

            <span>
              <Button onClick={onAddItem} className="mt-3 ml-3">
                <AddCircleIcon fontSize="large" />
              </Button>
            </span>
          </center>
        </CardContent>
        <ol>
          {newItem.map((item, index) => (
            <ItemList key={index} newItem={item} />
          ))}
        </ol>
      </Card>
    </div>
  );
};

export default TodoCard;
