const makeElement = require('../helpers/makeElement.js')

export function tasksShown(tasks) {
    const list = makeElement('ul',['task-list'])
    for (let task of tasks) {

        const item = makeElement('li', ['task-item'])
        const taskLeft = makeElement('div', ['task-left'])
        const taskRight = makeElement('div', ['task-right'])

        const src = task.done ? './static/checked.svg' : './static/unchecked.svg'
        const check = makeElement('img',['item-check'],null,{'src': src, 'alt': `Checkbox ${task.title}`})
        taskLeft.appendChild(check)

        const title = makeElement('span', ['item-text'], task.title)
        taskLeft.appendChild(title)

        const date = makeElement('span', ['item-date'], task.dueDate)
        taskRight.appendChild(date)

        const del = makeElement('img', ['item-delete'], null, {'src': './static/delete.svg', 'alt': `Delete ${task.title}`})
        taskRight.appendChild(del)

        item.appendChild(taskLeft)
        item.appendChild(taskRight)
        list.appendChild(item)
    }
    return list
}