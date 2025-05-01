const todoList = [];

document.querySelector('.js-name-input').addEventListener('keydown', enterlist);

function enterlist(event) {
    if(event.key === 'Enter') {
        addTodo();
    }
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';
}
