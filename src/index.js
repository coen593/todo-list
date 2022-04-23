import UI from './modules/UI'
import Storage from './modules/Storage'

const initStorage = (() => {
    const list = Storage.getList()
    if (!list.projects.length) {
        Storage.addProject('_no-project')
    }
    Storage.saveList(list)
})()