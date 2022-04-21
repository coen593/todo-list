module.exports = function makeElement(tag, classes, innerText, attributes) {
    const element = document.createElement(tag)
    if (classes) {
        for (let c of classes) {
            element.classList.add(c)
        }
    }
    if (innerText) element.innerText = innerText
    if (attributes) {
        for (let key in attributes) {
            element.setAttribute(key, attributes[key])
        }
    }
    return element
}