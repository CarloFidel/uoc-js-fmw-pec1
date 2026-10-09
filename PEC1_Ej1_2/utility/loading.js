import { HtmlElements } from "../constants/htmlElements.js"

const htmlElements = new HtmlElements

export const setLoading = (trigger) => {
    if (trigger) {
        htmlElements.loading.classList.remove('hide')
       // htmlElements.container.classList.add('hide')
    } else {
        htmlElements.loading.classList.add('hide')
        htmlElements.container.classList.remove('hide')
    }


}