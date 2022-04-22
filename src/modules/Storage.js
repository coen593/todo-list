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

    static addProject(p) {
        const list = Storage.getList()
        list.addProject(p, [])
        Storage.saveList(list)
    }
}