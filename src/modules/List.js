Module.exports = class List {
    constructor(projects) {
        this.projects = projects
    }

    addProject(p) {
        this.projects.push(p)
    }

    getProjects() {
        return this.projects
    }

    getProject(p) {
        return this.projects.find(project => project == p)
    }

    removeProject(p) {
        const index = this.projects.findIndex(project => project == p)
        this.projects.splice(index, 1)
    }
}