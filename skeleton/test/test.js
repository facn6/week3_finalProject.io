var test = require('tape');
var logic = require('../js/logic');

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
  deleteId=-3; 
  var actual = logic.deleteTodo(existDeleteArray,deleteId);
  var expected = [{id:-2,description:"second todo" ,done:false},
  {id:-1,description:"third todo",done:false}];
  t.deepEqual(actual, expected, 'the todo faild to remove it from the list');
  t.end();
});

test('markTodo test', function(t) {
  existMarkArray =[{id:-3,description:"first todo" , done:false},
  {id:-2,description:"second todo" ,done:false},
  {id:-1,description:"third todo",done:false}];
  markId=-3; 
  var actual = logic.markTodo(existMarkArray, markId);
  var expected = [{id:-3,description:"first todo" , done:true},
  {id:-2,description:"second todo" ,done:false},
  {id:-1,description:"third todo",done:false}];
  t.deepEqual(actual, expected, 'the todo faild to remove it from the list');
  t.end();
});


// test('sortTodos test', function(t) {
//   existSortArray =[{id:-3,description:"zirst todo" , done:false},
//   {id:-2,description:"wecond todo" ,done:false},
//   {id:-1,description:"third todo",done:false}];
//   sortFunction = logic.sort(existSortArray);
//   var actual = logic.sortTodos(existSortArray, sortFunction);
//   var expected = [{id:-1,description:"third todo",done:false},
//   {id:-2,description:"wecond todo" ,done:false},
//   {id:-3,description:"zirst todo" , done:false}];
//   t.equal(actual, expected, 'the todo list faild to sort');
//   t.end();
// });
