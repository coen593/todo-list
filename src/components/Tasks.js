import { toggleItemActive, toggleTaskCheck } from '../modules/UI.js'
const makeElement = require('../helpers/makeElement.js')

export function tasksShown(tasks) {
    const list = makeElement('ul',['task-list'])
    for (let task of tasks) {

        const item = makeElement('li', ['task-item'])
        const taskLeft = makeElement('div', ['task-left'])
        const taskRight = makeElement('div', ['task-right'])
        const taskBottom = makeElement('div', ['task-bottom'])

        const check = makeElement('img',['item-check'],null,{'src': './static/checked.svg', 'alt': `Checkbox ${task.title}`})
        const uncheck = makeElement('img',['item-uncheck'],null,{'src': './static/unchecked.svg', 'alt': `Checkbox ${task.title}`})
        taskLeft.appendChild(check)
        taskLeft.appendChild(uncheck)

        const title = makeElement('span', ['item-text'], task.title)
        taskLeft.appendChild(title)

        const date = makeElement('span', ['item-date'], task.dueDate)
        taskRight.appendChild(date)

        const del = makeElement('img', ['item-delete'], null, {'src': './static/delete.svg', 'alt': `Delete ${task.title}`})
        taskRight.appendChild(del)

        const description = makeElement('p', ['item-description'], task.description)
        taskBottom.appendChild(description)

        const edit = makeElement('img', ['item-edit'], null, {'src': './static/edit.svg', 'alt': `Edit ${task.title}`})
        taskBottom.appendChild(edit)

        const priority = makeElement('span', ['item-priority'], `Priority: ${task.priority}`)
        taskBottom.appendChild(priority)
        
        const projectText = task.project == '_no-project' ? '' :`Project: ${task.project}`
        const project = makeElement('span', ['item-project'], projectText)
        taskBottom.appendChild(project)

        item.appendChild(taskLeft)
        item.appendChild(taskRight)
        item.appendChild(taskBottom)
        list.appendChild(item)

        item.addEventListener('click', function() {toggleItemActive(this)})
        check.addEventListener('click', () => {
            item.classList.toggle('done')
            toggleTaskCheck(task)
            
        })
        uncheck.addEventListener('click', function() {
            item.classList.toggle('done')
            toggleTaskCheck(task)
        })
    }
    return list
}