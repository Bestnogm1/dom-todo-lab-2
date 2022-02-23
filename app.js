const button =document.querySelector('#submit-button')
const todo =document.querySelector('#input')
const ul =document.querySelector('#todo-list')
//! when something happens 
button.addEventListener('click',function(){
const newTodo = document.createElement('li')
// ! todo.value the value of the text 
newTodo.innerHTML = todo.value
//! appendChild
ul.appendChild(newTodo)
todo.value = " ";

})