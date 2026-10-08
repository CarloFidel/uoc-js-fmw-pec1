import { HtmlElements } from "../auth/HtmlElements.js"

const htmlElements = new HtmlElements

export const validate = () => {
    console.log(htmlElements.fields)
    return false
}