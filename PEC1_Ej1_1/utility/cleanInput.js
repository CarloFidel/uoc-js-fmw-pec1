import { HtmlElements } from "../auth/HtmlElements.js";

const htmlElements = new HtmlElements();

export const cleanInput = () => {
    htmlElements.form.addEventListener("input", (event) => {
        const fieldName = event.target.name;
        if (htmlElements.errorElements[fieldName]) {
            htmlElements.errorElements[fieldName].textContent = "";
        }
        const listOfClass = event.target.classList
        if (listOfClass.contains("form-status-error")) {
            listOfClass.remove("form-status-error");
        }

    });

}