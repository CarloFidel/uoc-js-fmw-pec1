import { HtmlElements } from "../auth/HtmlElements.js"
import { errorMessages } from "../utility/errorMessages.js";
import { RULES } from "./constants/rules.js";

const htmlElements = new HtmlElements
const errorFeedback = errorMessages()


export const validateEmptFields = () => {
    const emptyField = Object.values(htmlElements.fields)
        .filter((field) => field.value === "");

    if (emptyField.length > 0) {
        emptyField.forEach((field) => {
            field.classList.add("form-status-error");

            const errorElement = htmlElements.errorElements[field.name];
            errorElement.textContent = errorFeedback.emptyField;
        })
        return false
    }
    return true
}

export const validateValues = (field) => {
    switch (field) {
        case htmlElements.fields.username:
            if (!RULES.name.test(field.value)) {
                htmlElements.fields.username.classList.add("form-status-error");
                htmlElements.errorElements.username.textContent = errorFeedback.name;
                return false;
            }
            break;

        case htmlElements.fields.email:
            if (!RULES.email.test(field.value)) {
                htmlElements.fields.email.classList.add("form-status-error");
                htmlElements.errorElements.email.textContent = errorFeedback.email;
                return false;
            }
            break;

        case htmlElements.fields.age:
            if (!RULES.age(Number(field.value))) {
                htmlElements.fields.age.classList.add("form-status-error");
                htmlElements.errorElements.age.textContent = errorFeedback.age;
                return false;
            }
            break;

        case htmlElements.fields.password:
            if (!RULES.password.test(field.value)) {
                htmlElements.fields.password.classList.add("form-status-error");
                htmlElements.errorElements.password.textContent = errorFeedback.password;
                return false;
            }
            break;

        case htmlElements.fields.confirmPassword:
            if (!RULES.confirmPassword(field.value)) {
                htmlElements.fields.confirmPassword.classList.add("form-status-error");
                htmlElements.errorElements.confirmPassword.textContent = errorFeedback.confirmPassword;
                return false;
            }
            break;
    }

    return true;
};

export const validateFilds = () => {
    let valid = true;

    Object.values(htmlElements.fields).forEach((field) => {
        if (!validateValues(field)) {
            valid = false;
        }
    });

    return valid

}