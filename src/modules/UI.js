import {newTaskForm} from '../components/NewTaskForm.js'
import {navBar} from '../components/NavBar.js'

// const taskButton = document.querySelector('#add-task')
// container.appendChild(navBar())
// Module function to create basic UI
const init = (() => {
    const container = document.querySelector('.container')
    container.appendChild(navBar())
})()

const addTask = (e) => {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)
}

const showTaskForm = () => {
    const container = document.querySelector('.container')
    container.appendChild(newTaskForm())
}

const closeTaskForm = () => {
    const form = document.querySelector('.new-task-form')
    form.remove()
}

export {showTaskForm, closeTaskForm}

// taskForm.onsubmit = addTask