import { HtmlElements } from "../constants/htmlElements.js"

const htmlElements = new HtmlElements

export const setError = (trigger, message) => {
    if (trigger) {
        htmlElements.error.classList.remove('hide')
        htmlElements.error.textContent = message
    } else {
        htmlElements.error.classList.add('hide')
        htmlElements.error.textContent = ''
    }
}