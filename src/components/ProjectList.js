const makeElement = require('../helpers/makeElement.js')
import { createTaskView } from '../modules/UI'

export function projectList(projects, projectList) {

    let misc
    for (let project of projects) {
        if (project.title !== '_no-project') {
            const p = makeElement('li',['project-link'], project.title)
            projectList.appendChild(p)
            p.addEventListener('click', () => createTaskView('p', project))
        } else {
            misc = project
        }
    }
    projectList.appendChild(makeElement('hr'))
    const miscProject = makeElement('li', ['project-link','misc-project-link'], 'Miscellaneous tasks')
    projectList.appendChild(miscProject)
    miscProject.addEventListener('click', () => createTaskView('p', misc))

    return projectList
}