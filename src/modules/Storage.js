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

        list.setProjects(
            list.getProjects().map(p => Object.assign(new Project(), p))
        )

        list.getProjects().forEach(p => p.setTasks(
            p.getTasks().map(t => Object.assign(new Task(), t))
        ))

        return list
    }

    static getProjects() {
        const list = Storage.getList()
        return list.getProjects()
    }

    static getProject(p) {
        const list = Storage.getList()
        return list.getProject(p)
    }

    static addProject(p) {
        const projects = Storage.getProjects()
        for (let project of projects) {
            if (project.title == p) return 0
        }
        const list = Storage.getList()
        const project = new Project(p, [])
        list.addProject(project)
        Storage.saveList(list)
        return 1
    }

    static addTask(t) {
        const list = Storage.getList()
        const project = list.getProject(t.project)
        const tasks = project.getTasks()
        for (let task of tasks) {
            if (task.title == t.name) return 0
        }
        const task = new Task(t.name, t.description, t.date, t.priority)
        project.addTask(task)
        Storage.saveList(list)
        return 1
    }

    static showTasks(type, filter) {
        const list = Storage.getList()
        let tasks = []
        if (type == 'all') {
            const projects = this.getProjects()
            projects.forEach(project => {
                tasks = [...tasks,...project.getTasks()]
            })
        } else if (type == 'p') {
            tasks = filter.tasks
        }  
        return tasks
    }
}