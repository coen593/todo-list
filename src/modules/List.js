export default class List {
    constructor() {
        this.projects = []
    }

    addProject(p) {
        return this.projects.push(p)
    }

    setProjects(projects) {
        this.projects = projects
    }

    getProjects() {
        return this.projects
    }

    getProject(p) {
        return this.projects.find(project => project.getProject() == p)
    }

    removeProject(p) {
        const index = this.projects.findIndex(project => project == p)
        this.projects.splice(index, 1)
    }

    deleteProject(p) {
        const projectToDelete = this.projects.find(project => project.getProject() == p.title)
        this.projects.splice(this.projects.indexOf(projectToDelete), 1)
    }
}