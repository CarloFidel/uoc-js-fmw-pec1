import { HtmlElements } from "../auth/HtmlElements.js"

const htmlElements = new HtmlElements();


export function clearErrors() {
    Object.values(htmlElements.errorElements).forEach((errorElement) => {
        errorElement.textContent = "";
    });
    Object.values(htmlElements.fields).forEach((field) => {
        if (field.classList.contains("form-status-error")) {
            field.classList.remove("form-status-error");
        }
    });
}

