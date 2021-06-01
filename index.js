const express = require('express');
const app = express();
const port = 5000;
const { getAll, getOne, updateOne, deleteOne, addNew } = require('./routes');
app.use(express.json());

// GET ALL USER
app.get('/', getAll);

// GET ONE USER
app.get('/:id', getOne);

// PATCH TO FIND AND EDIT ONE
app.patch('/:id', updateOne);

// FIND AND DELETE ONE
app.delete('/:id', deleteOne);

// POST METHOD
app.post('/', addNew);

// HANDLE ALL UNKNOWN ROUTES
app.all('*', (req, res) => {
  res.status(404).json({ message: 'request not found' });
});

app.listen(port, () => {
  console.log(`Server listening on port:${port}....`);
});
