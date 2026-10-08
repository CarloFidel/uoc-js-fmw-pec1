import { formBeheviour } from "./auth/form.js";
import { cleanInput } from "./utility/cleanInput.js";
import { clearErrors } from "./utility/clearErrors.js";
import { reset } from "./utility/reset.js";



const engine = () => {
    cleanInput()
    clearErrors()
    reset()
    formBeheviour()
}

engine()