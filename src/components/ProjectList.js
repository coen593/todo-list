const makeElement = require('../helpers/makeElement.js')

export function projectList(projects, projectList) {

    for (let project of projects) {
        if (project.title !== '_no-project') {
            const p = makeElement('li',['project-link'], project.title)
            projectList.appendChild(p)
        }
    }
    projectList.appendChild(makeElement('hr'))
    const miscProject = makeElement('li', ['project-link','misc-project-link'], 'Miscellaneous projects')
    projectList.appendChild(miscProject)

    return projectList
}