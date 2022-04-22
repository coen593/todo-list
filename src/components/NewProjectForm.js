import { closeForm } from '../modules/UI.js'
const makeElement = require('./makeElement.js')

export function newProjectForm() {
    const form = makeElement('form',['new-project-form'])

    const legend = makeElement('legend',null,'Please add your new project!')
    form.appendChild(legend)

    const closeIcon = new Image()
    closeIcon.src = './static/x.svg'
    form.appendChild(closeIcon)
    closeIcon.addEventListener('click', () => closeForm())

    const nameLabel = makeElement('label',null,'Project Name',{
        'for': 'new-project-name'
    })
    const name = makeElement('input', ['new-task-input'], null, {
        'id': 'new-task-name',
        'required': 'true',
        'type': 'text'
    })
    form.appendChild(nameLabel)
    form.appendChild(name)

    const button = makeElement('button', ['btn', 'new-task-btn'], 'Add Task', {
        'type': 'submit',
        'id': 'new-task-btn'
    })
    form.appendChild(button)
    button.addEventListener('click', () => {
        closeForm()
    })

    return form
}