import { APPEXCHANGE_PRIVATE_KEY } from "../env.js";
import { BASE_URL } from "./config/basURL.js";

const url = BASE_URL + APPEXCHANGE_PRIVATE_KEY


export async function getData() {
    const response = await fetch(
        `${BASE_URL}${APPEXCHANGE_PRIVATE_KEY}/latest/USD`
    );

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
}