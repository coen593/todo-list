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

    static getTask(t) {
        const projects = Storage.getProjects()
        for (let project of projects) {
            const tasks = project.getTasks()
            for (let task of tasks) {
                if (task.title == t.title && project.title == task.project) {
                    return task
                }
            }
        }
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

    static checkTaskExists(t) {
        const list = Storage.getList()
        const project = list.getProject(t.project)
        const tasks = project.getTasks()
        for (let task of tasks) {
            if (task.title == t.title) return true
        }
        return false
    }

    static addTask(t) {
        if (this.checkTaskExists(t)) return 0
        const list = Storage.getList()
        const project = list.getProject(t.project)
        const task = new Task(t.title, t.description, t.date, t.priority, t.project)
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

    static setTaskDone(task) {
        const list = Storage.getList()
        list.getProject(task.project).getTask(task).setDone()
        Storage.saveList(list)
    }

    static deleteTask(task) {
        const list = Storage.getList()
        list.getProject(task.project).removeTask(task)
        Storage.saveList(list)
    }

    static editTask(newTask, oldTask) {
        if (newTask.title !== oldTask.title || newTask.project !== oldTask.project) {
            console.log(newTask.title, oldTask.title)
            if (Storage.checkTaskExists(newTask)) return 0
        }
        Storage.deleteTask(oldTask)
        Storage.addTask(newTask)
        return 1
    }

    static deleteProject(project) {
        const list = Storage.getList()
        list.deleteProject(project)
        Storage.saveList(list)
    }
}