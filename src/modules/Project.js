module.exports = class Project {
    constructor(name) {
        this.name = name
    }

    getProject() {
        return this.name
    }

    setProject(name) {
        this.name = name
    }
    
}