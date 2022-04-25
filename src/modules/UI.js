import { newTaskForm } from '../components/NewTaskForm'
import { header } from '../components/Header'
import { sidebar } from '../components/Sidebar'
import { contentSection } from '../components/ContentSection'
import { newProjectForm } from '../components/NewProjectForm'
import { editTaskForm } from '../components/EditTaskForm'
import { taskHeader } from '../components/TaskHeader'
import { tasksShown } from '../components/Tasks'
import { projectList } from '../components/ProjectList'
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

const emptyElement = element => {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

const showSidebarProjects = () => {
    const projects = Storage.getProjects()
    const list = document.querySelector('.project-list')
    emptyElement(list)
    projectList(projects, list)
}

const createTaskView = (filter) => {
    const content = document.querySelector('.content')
    emptyElement(content)
    const type = getActiveView()
    const header = taskHeader(type, filter)
    const tasks = tasksShown(Storage.showTasks(type, filter))
    content.appendChild(header)
    content.appendChild(tasks)
}

const toggleItemActive = item => item.classList.toggle('active')

const getActiveView = () => {
    const viewHeader = document.querySelector('.content-header')
    if (!viewHeader || viewHeader.classList.contains('all')) {
        return 'all'
    }
    if (viewHeader.classList.contains('p')) {
        return 'p'
    }
}

const toggleTaskCheck = task => {
    Storage.setTaskDone(task)
}

const deleteTask = task => {
    Storage.deleteTask(task)
    if (getActiveView() == 'all') {
        createTaskView('all')
    } else if (getActiveView() == 'p') {
        createTaskView('p', task.project)
    }
}

const showEditTaskForm = task => {
    const container = document.querySelector('.container')
    if (!container.classList.contains('hasForm')){
        container.classList.add('hasForm')
        container.appendChild(editTaskForm(task))
    }
}

export {
    showTaskForm, 
    showProjectForm, 
    closeForm, 
    createTaskView, 
    showSidebarProjects,
    toggleItemActive,
    toggleTaskCheck,
    deleteTask,
    showEditTaskForm
}