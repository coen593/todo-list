import { newTaskForm } from '../components/NewTaskForm.js'
import { navBar } from '../components/NavBar.js'
import { newProjectForm } from '../components/NewProjectForm.js'

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
    if (!container.classList.contains('hasForm')){
        container.classList.add('hasForm')
        container.appendChild(newTaskForm())
    }
}

const showProjectForm = () => {
    const container = document.querySelector('.container')
    if (!container.classList.contains('hasForm')){
        container.classList.add('hasForm')
        container.appendChild(newProjectForm())
    }
}

const closeForm = () => {
    const container = document.querySelector('.container')
    container.classList.remove('hasForm')
    const form = document.querySelector('form')
    form.remove()
}

export { showTaskForm, showProjectForm, closeForm }

// taskForm.onsubmit = addTask