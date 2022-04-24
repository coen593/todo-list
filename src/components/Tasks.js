const makeElement = require('../helpers/makeElement.js')

export function tasksShown(tasks) {
    const list = makeElement('ul',['task-list'])
    console.log(tasks)
    for (let task of tasks) {

        const item = makeElement('li', ['task-item'], task.title)
        list.appendChild(item)
    }
    return list
}