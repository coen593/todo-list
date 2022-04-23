import UI from './modules/UI'
import Storage from './modules/Storage'

const initStorage = (() => {
    const list = Storage.getList()
    if (!list.projects.length) {
        console.log('no length')
        Storage.addProject('_no-project')
    }
})()