const newTaskForm = require('../components/NewTaskForm.js')

const container = document.querySelector('.container')
const taskButton = document.querySelector('#add-task')

const addTask = (e) => {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)
}

const showTaskForm = () => {
    container.appendChild(newTaskForm())
}

taskButton.addEventListener('click', () => showTaskForm())
// taskForm.onsubmit = addTask