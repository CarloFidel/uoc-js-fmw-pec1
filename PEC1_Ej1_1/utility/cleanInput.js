import { HtmlElements } from "../auth/HtmlElements.js";

const htmlElements = new HtmlElements();

export const cleanInput = () => {
    htmlElements.form.addEventListener("input", (event) => {
        const fieldName = event.target.name;
        if (htmlElements.errorElements[fieldName]) {
            htmlElements.errorElements[fieldName].textContent = "";
            event.target.removeAttribute("aria-invalid");
        }
        htmlElements.status.textContent = "";
        htmlElements.status.removeAttribute("data-state");
    });

}