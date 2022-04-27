import { toggleItemActive, toggleTaskCheck, deleteTask, showEditTaskForm, createTaskView } from '../modules/UI.js'
const makeElement = require('../helpers/makeElement.js')

export function tasksShown(tasks) {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate) || a.priority - b.priority)
    const list = makeElement('ul', ['task-list'])
    for (let task of tasks) {
        const item = makeElement('li', ['task-item'], null, { 'tabindex': '0' })
        const taskLeft = makeElement('div', ['task-left'])
        const taskRight = makeElement('div', ['task-right'])
        const taskBottom = makeElement('div', ['task-bottom'])

        const check = makeElement('img', ['item-check'], null, { 'tabindex': '0', 'src': './static/checked.svg', 'alt': `Checkbox ${task.title}` })
        const uncheck = makeElement('img', ['item-uncheck'], null, { 'tabindex': '0', 'src': './static/unchecked.svg', 'alt': `Checkbox ${task.title}` })
        taskLeft.appendChild(check)
        taskLeft.appendChild(uncheck)
        if (task.done) item.classList.add('done')

        const title = makeElement('span', ['item-text'], task.title)
        taskLeft.appendChild(title)

        const date = makeElement('span', ['item-date'], task.dueDate)
        taskRight.appendChild(date)

        const edit = makeElement('img', ['item-edit'], null, { 'tabindex': '0', 'src': './static/edit.svg', 'alt': `Edit ${task.title}` })
        taskRight.appendChild(edit)

        const del = makeElement('img', ['item-delete'], null, { 'tabindex': '0', 'src': './static/delete.svg', 'alt': `Delete ${task.title}` })
        taskRight.appendChild(del)

        const description = makeElement('p', ['item-description'], task.description)
        taskBottom.appendChild(description)

        const priority = makeElement('span', ['item-priority'], `Priority: ${task.priority}`)
        taskBottom.appendChild(priority)
        item.classList.add(`prio${task.priority}`)

        const projectText = task.project == '_no-project' ? '' : `Project: ${task.project}`
        const project = makeElement('span', ['item-project'], projectText)
        taskBottom.appendChild(project)

        item.appendChild(taskLeft)
        item.appendChild(taskRight)
        item.appendChild(taskBottom)
        list.appendChild(item)

        item.addEventListener('click', function () { toggleItemActive(this) })
        check.addEventListener('click', e => {
            e.stopPropagation()
            item.classList.toggle('done')
            toggleTaskCheck(task)
        })
        uncheck.addEventListener('click', e => {
            e.stopPropagation()
            item.classList.toggle('done')
            toggleTaskCheck(task)
        })
        del.addEventListener('click', e => {
            e.stopPropagation()
            deleteTask(task)
        })
        edit.addEventListener('click', e => {
            e.stopPropagation()
            showEditTaskForm(task)
        })
        project.addEventListener('click', () => createTaskView('p', task.project))
    }
    return list
}