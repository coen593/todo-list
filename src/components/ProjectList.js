const makeElement = require('../helpers/makeElement.js')
import { createTaskView } from '../modules/UI'

export function projectList(projects, projectList) {

    let misc
    for (let project of projects) {
        if (project.title !== '_no-project') {
            const li = makeElement('li',['project-link'], null, {'tabindex': '0'})

            const p = makeElement('span', null, project.title)
            li.appendChild(p)

            if (project.tasks.length) {
                const num = makeElement('span',['project-amount'], project.tasks.length)
                li.appendChild = num
            }
            projectList.appendChild(li)
            li.addEventListener('click', () => createTaskView('p', project))

        } else {
            misc = project
        }
    }
    
    projectList.appendChild(makeElement('hr'))
    const li = makeElement('li',['project-link'], null, {'tabindex': '0'})
    const miscProject = makeElement('span', null, 'Miscellaneous tasks')
    li.appendChild(miscProject)
    
    const miscNum = makeElement('span',['project-amount'], misc.tasks.length)
    li.appendChild(miscNum)

    projectList.appendChild(li)
    li.addEventListener('click', () => createTaskView('p', misc))

    return projectList
}