const Joi = require('joi');
const mongoose = require('mongoose');


const Todo = mongoose.model('Todo', new mongoose.Schema({
    name: {
      todoname: String,
      isCompleted: Boolean,
    }
  }));
  function validateTodo(todo) {
    const schema = {
      toname: Joi.string().min(3).required()
    };
  
    return Joi.validate(todo, schema);
  }
  
  exports.Todo = Todo; 
  exports.validate = validateTodo