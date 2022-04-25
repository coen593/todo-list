import { closeForm, createTaskView } from '../modules/UI'
import Storage from '../modules/Storage'
const makeElement = require('../helpers/makeElement.js')

export function editTaskForm(task) {
    const form = makeElement('form',['new-task-form'])

    const legend = makeElement('legend',null,`Edit task: ${task.title}`)
    form.appendChild(legend)

    const closeIcon = new Image()
    closeIcon.src = './static/x.svg'
    form.appendChild(closeIcon)
    closeIcon.addEventListener('click', () => closeForm())

    const nameLabel = makeElement('label',null,'Task Name',{
        'for': 'new-task-name'
    })
    const name = makeElement('input', ['new-task-input'], null, {
        'id': 'new-task-name',
        'required': 'true',
        'type': 'text',
        'name': 'name',
        'value': task.title
    })
    form.appendChild(nameLabel)
    form.appendChild(name)

    const descriptionLabel = makeElement('label',null,'Description',{
        'for': 'new-task-description'
    })
    const description = makeElement('textarea', ['new-task-input'], task.description, {
        'id': 'new-task-description',
        'rows': '6',
        'name': 'description'
    })
    form.appendChild(descriptionLabel)
    form.appendChild(description)

    const dateLabel = makeElement('label',null,'Due Date',{
        'for': 'new-task-date'
    })
    const date = makeElement('input', ['new-task-input'], null, {
        'id': 'new-task-date',
        'type': 'date',
        'name': 'date',
        'value': task.dueDate
    })
    form.appendChild(dateLabel)
    form.appendChild(date)

    const projectLabel = makeElement('label',null,'Project', {
        'for': 'Project'
    })
    const project = makeElement('select', ['new-task-input'], null, {
        'id': 'new-task-project',
        'name': 'project',
        'value': task.project
    })
    const projects = Storage.getProjects()
    const option = makeElement('option', null, '-- no project --', {'value': '_no-project'})
    project.appendChild(option)
    for (let p of projects) {
        if (p.title !== '_no-project') {
            const option = makeElement('option', null, p.title, {'value': p.title})
            if (p.title == task.project) {
                option.setAttribute('selected','selected')
            }
            project.appendChild(option)
        }
    }
    form.appendChild(projectLabel)
    form.appendChild(project)

    const priorityLabel = makeElement('label',null,'Priority',{
        'for': 'new-task-priority'
    })
    const priority = makeElement('select', ['new-task-input'], null, {
        'id': 'new-task-priority',
        'name': 'priority'
    })
    for (let i of [1,2,3]) {
        const option = makeElement('option', null, i, {'value': i.toString()})
        if (i == task.priority) {
            option.setAttribute('selected','selected')
        }
        priority.appendChild(option)
    }
    form.appendChild(priorityLabel)
    form.appendChild(priority)

    const message = makeElement('p', ['name-taken','error-message'], 'This task name is already taken!', {
        'id': 'task-name-error',
    })
    message.style.visibility='hidden'
    form.appendChild(message)

    const button = makeElement('button', ['btn', 'new-task-btn'], 'Add Task', {
        'type': 'submit',
        'id': 'new-task-btn'
    })
    form.appendChild(button)
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        if (Storage.editTask(data) == 0) {
            message.style.visibility='visible'
        } else {
            closeForm()
            if (data.project == '_no-project') {
                createTaskView(null)
            } else {
                createTaskView(null, Storage.getProject(data.project))
            }
        }
    })

    return form
}