import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DynamicList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      console.log(items);
      setInputValue('');
    }
  };

  const handleDelete = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Box my={4}>
      <Typography variant="h6" gutterBottom>
        Lista Dinámica
      </Typography>
      <TextField
        label="Agregar elemento"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sx={{ mb: 2, width: '100%' }}
      />
      <Button variant="contained" color="primary" onClick={handleAdd} sx={{ mb: 2 }}>
        Agregar
      </Button>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DynamicList;