import { newTaskForm } from '../components/NewTaskForm'
import { header } from '../components/Header'
import { sidebar } from '../components/Sidebar'
import { contentSection } from '../components/ContentSection'
import { newProjectForm } from '../components/NewProjectForm'
import { taskHeader } from '../components/TaskHeader'
import { tasksShown } from '../components/Tasks'
import Storage from '../modules/Storage'

// Module function to create basic UI
const init = (() => {
    const container = document.querySelector('.container')
    container.appendChild(header())
    container.appendChild(sidebar())
    container.appendChild(contentSection())
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

const createTaskView = (type, filter) => {
    const content = document.querySelector('.content')
    const header = taskHeader('all')
    const tasks = tasksShown(Storage.showTasks('all'))
    content.appendChild(header)
    content.appendChild(tasks)
}

export { showTaskForm, showProjectForm, closeForm, createTaskView }