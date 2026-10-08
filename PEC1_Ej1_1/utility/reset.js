import { HtmlElements } from "../auth/HtmlElements.js";
import { clearErrors } from "./clearErrors.js";

const htmlElements = new HtmlElements();

export const reset = () => {
    htmlElements.form.addEventListener("reset", () => {
        clearErrors();
    });
}