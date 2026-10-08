export class HtmlElements {
    constructor() {
        this.form = document.querySelector("#registration-form");
        this.fields = {
            username: document.querySelector("#username"),
            email: document.querySelector("#email"),
            age: document.querySelector("#age"),
            password: document.querySelector("#password"),
            confirmPassword: document.querySelector("#confirm-password"),
            
        };
        this.errorElements = {
            username: document.querySelector("#username-error"),
            email: document.querySelector("#email-error"),
            age: document.querySelector("#age-error"),
            password: document.querySelector("#password-error"),
            confirmPassword: document.querySelector("#confirm-password-error"),
        };
    }
}