var test = require('tape');
var logic = require('./logic.js');

test('Example test', function(t) {
  t.pass();
  t.end();
});



test('addTodo test', function(t) {
  existAddArray =[{id:-3,description:"first todo" , done:false},
  {id:-2,description:"second todo" ,done:false},
  {id:-1,description:"third todo",done:false}];
  addItem={id:1,description:"test1" , done:false};
  var actual = logic.addTodo(existAddArray,addItem);
  var expected = [{id:-3,description:"first todo" , done:false},
  {id:-2,description:"second todo", done:false},
  {id:-1,description:"third todo" , done:false},
  {id:1,description:"test1" ,done:false}];
  t.deepEqual(actual, expected, 'the new todo faild to add it to the list');
  t.end();
});

test('deleteTodo test', function(t) {
  existDeleteArray =[{id:-3,description:"first todo" , done:false},
  {id:-2,description:"second todo" ,done:false},
  {id:-1,description:"third todo",done:false}];
  deleteItem=-3; 
  var actual = logic.deleteTodo(existDeleteArray,deleteItem);
  var expected = [{id:-2,description:"second todo" ,done:false},
  {id:-1,description:"third todo",done:false}];
  t.deepEqual(actual, expected, 'the todo faild to remove it from the list');
  t.end();
});

test('markTodo test', function(t) {
  var actual = logic.markTodo(["a","b","c"], 2);
  var expected = ["a","b","c,done"];
  t.equal(actual, expected, 'the todo faild to remove it from the list');
  t.end();
});


test('sortTodos test', function(t) {
  var actual = logic.sortTodos(["a","b","c"], ["a","b","c"].sort());
  var expected = ["a","b","c"];
  t.equal(actual, expected, 'the todo list faild to sort');
  t.end();
});
