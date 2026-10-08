import { HtmlElements } from "../../auth/HtmlElements.js"

const htmlElements = new HtmlElements

export const REGULAR_EXPRESSIONS = {
    name: /^[A-Z][a-zA-Z0-9_-]{1,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-={}|[\]\\:";'<>,.?])[A-Za-z\d~!@#$%^&*()_+\-={}|[\]\\:";'<>,.?]{8,}$/
}

export const RULES = {
    name: REGULAR_EXPRESSIONS.name,
    email: REGULAR_EXPRESSIONS.email,
    password: REGULAR_EXPRESSIONS.password,
    age: (age) => {
        return age > 0 && age < 100 ? true : false
    },
    confirmPassword: (password) => {
        return password === htmlElements.fields.password.value ? true : false

    }
}
