import { HtmlElements } from "../auth/HtmlElements.js"

const htmlElements = new HtmlElements();


export function clearErrors() {
    Object.values(htmlElements.errorElements).forEach((errorElement) => {
        errorElement.textContent = "";
    });
}

