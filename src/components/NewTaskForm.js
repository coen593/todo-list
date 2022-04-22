import { closeTaskForm } from '../modules/UI.js'
const makeElement = require('./makeElement.js')

export function newTaskForm() {
    const form = makeElement('form',['new-task-form'])

    const legend = makeElement('legend',null,'Please add your new task!')
    form.appendChild(legend)

    const closeIcon = new Image()
    closeIcon.src = './static/x.svg'
    form.appendChild(closeIcon)
    closeIcon.addEventListener('click', () => closeTaskForm())

    const nameLabel = makeElement('label',null,'Task Name',{
        'for': 'new-task-name'
    })
    const name = makeElement('input', ['new-task-input'], null, {
        'id': 'new-task-name',
        'required': 'true',
        'type': 'text'
    })
    form.appendChild(nameLabel)
    form.appendChild(name)

    const descriptionLabel = makeElement('label',null,'Description',{
        'for': 'new-task-description'
    })
    const description = makeElement('textarea', ['new-task-input'], null, {
        'id': 'new-task-description',
        'rows': '6'
    })
    form.appendChild(descriptionLabel)
    form.appendChild(description)

    const dateLabel = makeElement('label',null,'Due Date',{
        'for': 'new-task-date'
    })
    const date = makeElement('input', ['new-task-input'], null, {
        'id': 'new-task-date',
        'type': 'date'
    })
    form.appendChild(dateLabel)
    form.appendChild(date)

    const priorityLabel = makeElement('label',null,'Priority',{
        'for': 'new-task-priority'
    })
    const priority = makeElement('select', ['new-task-input'], null, {
        'id': 'new-task-priority',
        'name': 'priority'
    })
    for (let i of [1,2,3]) {
        const option = makeElement('option', null, i, {'value': i.toString()})
        priority.appendChild(option)
    }
    form.appendChild(priorityLabel)
    form.appendChild(priority)

    const button = makeElement('button', ['btn', 'new-task-btn'], 'Add Task', {
        'type': 'submit',
        'id': 'new-task-btn'
    })
    form.appendChild(button)
    button.addEventListener('click', () => {
        closeTaskForm()
    })

    return form
}