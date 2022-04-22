export default class Project {
    constructor(title, tasks) {
        this.title = title
        this.tasks = tasks
    }

    getProject() {
        return this.title
    }

    setProject(title) {
        this.title = title
    }
    
    getTasks() {
        return this.tasks
    }

    getTask(t) {
        return this.tasks.find(task => task == t)
    }

    addTask(task) {
        tasks.push(task)
    }

    removeTask(t) {
        const index = tasks.findIndex(task => task == t)
        this.tasks.splice(index, 1)
    }
}