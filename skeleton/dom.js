// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo' , done:false },
    { id: -2, description: 'second todo' , done:false },
    { id: -1, description: 'third todo' , done:false},
  ]; // this is our initial todoList
  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    todoNode.setAttribute("id" , todo.id);
    var descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = todo.description;
    todoNode.appendChild(descriptionSpan);
    // you will need to use addEventListener

    // add span holding description

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    var txt = document.createTextNode("x");
    deleteButtonNode.appendChild(txt);

    deleteButtonNode.addEventListener('click', function(event) {
      var idToDelete = event.target.parentElement.id;
      console.log(event.target.parentElement.id);
      var newState = todoFunctions.deleteTodo(state, idToDelete);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    var newState = [];
    addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var input = document.getElementById("item");
      newState =todoFunctions.addTodo(state,{id:todoFunctions.generateId(), description:input.value , done:false});
      update(newState);
      });

    
  }
  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });
    todoListNode.addEventListener('click', function(event) {
      if(event.target.tagName === 'SPAN')
      {
        event.target.classList.toggle('checked')
          var idToMark = event.target.parentElement.id;
          document.getElementById(idToMark).className = "checked"; 
          todoFunctions.markTodo(state, idToMark);
      }       
      });
    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
