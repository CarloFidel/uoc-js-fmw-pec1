import { HtmlElements } from "./HtmlElements.js"
import { clearErrors } from "../utility/clearErrors.js"
import { validate } from "../validation/validate.js";

const htmlElements = new HtmlElements();

export const formBeheviour = () => {
    htmlElements.form.addEventListener("submit", (event) => {
        event.preventDefault();
        clearErrors();
        htmlElements.status.textContent = "";
        htmlElements.status.removeAttribute("data-state");

        const valid = validate()
        if (!validate)
        console.log('sending')
    });

}

