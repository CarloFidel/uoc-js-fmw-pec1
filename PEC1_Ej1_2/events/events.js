import { HtmlElements } from "../constants/htmlElements.js"
import { getData } from "../services/get-data.js"

const htmlElements = new HtmlElements

export const engine = () => {
    htmlElements.currencyOne.addEventListener('change', calculate)
    htmlElements.currencyTwo.addEventListener('change', calculate)
    htmlElements.amountOne.addEventListener('change', calculate)
    htmlElements.amountTwo.addEventListener('change', calculate)

}

export const calculate = async () => {
    const current_once = htmlElements.currencyOne.value
    const current_two = htmlElements.currencyTwo.value

    const rate = await getData()
    const initialRate = rate[current_two]

    htmlElements.rate.textContent = `1 ${current_once} = ${initialRate} ${current_two}`




}