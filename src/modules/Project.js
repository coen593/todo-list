module.exports = class Project {
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

    getTask(task) {
        return this.tasks.find(t => task == t)
    }

    addTask(task) {
        tasks.push(task)
    }

    removeTask(task) {
        const index = tasks.findIndex(t => task == t)
        this.tasks.splice(index, 1)
    }
}