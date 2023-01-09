const express = require('express');
const Todo = require('../model/Itemlistmodel');

const router = express.Router();

router.get('/api/item', async (req, res)=>{
    try{
      const allTodoItems = await Todo.find({});
      res.status(200).json(allTodoItems)
    }catch(err){
      res.json(err);
    }
  });

router.post('/api/item', async (req, res)=>{
    try{
      const newItem = new Todo({
        item: req.body.item
      })
      const saveItem = await newItem.save()
      res.status(200).json(saveItem);
    }catch(err){
      res.json(err);
    }
  });

router.put('/api/item/:id', async (req, res)=>{
    try{
      const updateItem = await Todo.findByIdAndUpdate(req.params.id, {$set: req.body});
      res.status(200).json(updateItem);
    }catch(err){
      res.json(err);
    }
  });

router.delete('/api/item/:id', async (req, res)=>{
    try{
      const deleteItem = await Todo.findByIdAndDelete(req.params.id);
      res.status(200).json('Item Deleted');
    }catch(err){
      res.json(err);
    }
  });

  module.exports = router;
