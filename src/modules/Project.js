export default class Project {
    constructor(title) {
        this.title = title
        this.tasks = []
    }

    getProject() {
        return this.title
    }

    setProject(title) {
        this.title = title
    }
    
    setTasks(tasks) {
        this.tasks = tasks
    }

    getTasks() {
        return this.tasks
    }

    getTask(t) {
        return this.tasks.find(task => task == t)
    }

    addTask(task) {
        return this.tasks.push(task)
    }

    removeTask(t) {
        const index = this.tasks.findIndex(task => task.getTitle() == t.title)
        this.tasks.splice(index, 1)
    }
}