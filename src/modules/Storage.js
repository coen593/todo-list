import Task from './Task'
import Project from './Project'
import List from './List'

export default class Storage {
    static saveList(data) {
        localStorage.setItem('list',JSON.stringify(data))
    }

    static getList() {
        const list = Object.assign(
            new List(),
            JSON.parse(localStorage.getItem('list'))
        )
        return list
    }

    static getProjects() {
        const list = Storage.getList()
        return list.getProjects()
    }

    static addProject(p) {
        const projects = Storage.getProjects()
        for (let project of projects) {
            if (project.title == p) return 0
        }
        const list = Storage.getList()
        const project = new Project(p)
        list.addProject(project, [])
        Storage.saveList(list)
        return 1
    }


}