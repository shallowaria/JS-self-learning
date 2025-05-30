const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: 'make dinner',
    dueDate: '2022-12-22'
},
{
    name: 'wash dishes',
    dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
    // Generation the HTML
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;简写↓
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="todoList.splice(${i}, 1); renderTodoList();" class="delete-todo-button">Delete</button>
    `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

document.querySelector('.js-name-input').addEventListener('keydown', enterlist);

function enterlist(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate 简写↓
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

// 获取今天的日期
const today = new Date();

// 格式化为 yyyy-mm-dd（input[type="date"] 接受这种格式）
const formattedDate = today.toISOString().split('T')[0];

// 设置 input 元素的默认值
document.querySelector('.js-due-date-input').value = formattedDate;
