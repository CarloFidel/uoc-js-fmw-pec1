import { APPEXCHANGE_PRIVATE_KEY } from "../env.js";
import { setError } from "../utility/error.js";
import { setLoading } from "../utility/loading.js";
import { BASE_URL } from "./config/basURL.js";

export async function getCurrencyData() {

    setLoading(true)
    setError(false)

    try {
        const response = await fetch(
            `${BASE_URL}${APPEXCHANGE_PRIVATE_KEY}/latest/USD`
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json()


        setLoading(false)
        setError(false)

        console.log(data.conversion_rates)

        return data.conversion_rates




    } catch (error) {
        setLoading(false)
        setError(false, error)
    }
    finally {
        setLoading(false)

    }

}