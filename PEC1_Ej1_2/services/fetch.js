import { APPEXCHANGE_PRIVATE_KEY } from "../env.js";
import { BASE_URL } from "./config/basURL.js";

export async function getData() {
    console.log(BASE_URL + APPEXCHANGE_PRIVATE_KEY)
    try {

        const response = await fetch(
            `${BASE_URL}${APPEXCHANGE_PRIVATE_KEY}/latest/USD`
        );
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data)

        return data;
    } catch (error) {
        throw error;
    } finally {
    }
}