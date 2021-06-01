const data = require('./data');

//  Get all items

const getAll = (req, res) => {
  try {
    res.send(data).res.status(200);
  } catch (err) {
    res.status(404).send('No Item found');
  }
};

// Get One Item
const getOne = (req, res) => {
  const id = req.params.id;
  try {
    const item = data.find((item) => {
      if (item.id === +id) return item;
    });
    if (!item) res.status(401).json({ message: 'item not found' });
    res.status(200).send(item);
  } catch (err) {
    console.log(err);
  }
};

// Find One ad Update One

const updateOne = (req, res) => {
  const id = req.params.id;
  try {
    const item = data.find((item) => {
      if (item.id === +id) {
        return item;
      }
    });
    if (!item) res.status(401).json({ message: 'item not found' });
    if (item) {
      const num = data.indexOf(item);
      data[num] = req.body;
      res.status(200).json({ status: 'success', data: data[num] });
    }
  } catch (err) {
    console.log(err);
  }
};

// Find One and Delete one

const deleteOne = (req, res) => {
  const id = req.params.id;
  try {
    const item = data.find((item) => {
      if (item.id === +id) {
        return item;
      }
    });
    if (!item) res.status(401).json({ message: 'item not found' });
    if (item) {
      data.splice(data.indexOf(item), 1);
      res.status(200).json({ status: 'success', data: 'deleted' });
    }
  } catch (err) {
    console.log(err);
  }
};

//  Add new item

const addNew = (req, res) => {
  // if (err) res.send({ message: 'Failed' });
  console.log(req.body);
  if (!req.body.id) {
    res.status(404).json({ error: 'You cant send empty fields' });
  }
  const reqBody = req.body;
  data.push(reqBody);
  res.status(200).json({ message: 'success', action: 'Item added...' });
};

module.exports = { getAll, getOne, updateOne, deleteOne, addNew };
