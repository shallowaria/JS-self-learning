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
    // Generation the HTML,forEach函数第一个参数是元素，第二个是数组的索引，名称不限制
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    //1.写在innerHTML下面保证这串string已经生成为html代码2.加个All选中所有的Delete按钮，而不是第一个
    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
        //Closure: if a function has access to a value;It will always have access to that value
    //上面的index在forEach运行完后就会消失，必须把console.log(index);写在forEach内保证存续
        console.log(index);
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });
    });
}

document.querySelector('.js-name-input').addEventListener('keydown', enterlist);

function enterlist(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
})

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


document.querySelector('.js-clear-button').addEventListener('click', () => {
    clearTodoStorage();
});

function clearTodoStorage() {
    localStorage.removeItem('todoList');
    todoList.length = 0;
    renderTodoList();
}