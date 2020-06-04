import React, { useState } from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {
  ListItem,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';

const ItemList = ({ newItem }) => {
  const [done, setDone] = useState(false);

  const itemDone = () => {
    setDone(true);
  };
  return (
    <div>
      <ListItem
        className="list-item"
        style={{ textDecoration: done ? 'line-through' : 'none' }}
      >
        {newItem}
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={itemDone}>
            <CheckCircleOutlineIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};

export default ItemList;
