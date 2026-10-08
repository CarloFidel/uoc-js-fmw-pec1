import { HtmlElements } from "./HtmlElements.js"
import { validateEmptFields, validateFilds, validateValues } from "../validation/validate.js";

const htmlElements = new HtmlElements();


export const formBeheviour = () => {
    htmlElements.form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!validateEmptFields()) return
        if (!validateFilds()) return

        const formData = new FormData(htmlElements.form);


        console.log(formData.data)
    });

}
