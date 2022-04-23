import { newTaskForm } from '../components/NewTaskForm'
import { header } from '../components/Header'
import { sidebar } from '../components/Sidebar'
import { content } from '../components/Content'
import { newProjectForm } from '../components/NewProjectForm'

// Module function to create basic UI
const init = (() => {
    const container = document.querySelector('.container')
    container.appendChild(header())
    container.appendChild(sidebar())
    container.appendChild(content())
})()

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