module.exports = class Task {
    constructor(title, description, dueDate, priority, project) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.project = project
    }

    setTitle(t) {
        this.title = t
    }

    getTitle() {
        return this.title
    }

    setDescription(d) {
        this.description = d
    }

    getDescription() {
        return this.description
    }

    setDue(d) {
        this.dueDate = d
    }

    getDue() {
        return this.dueDate
    }

    setPriority(p) {
        this.priority = p
    }

    getPriority() {
        return this.priority
    }

    setProject(p) {
        this.project = p
    }

    getProject() {
        return this.project
    }
}