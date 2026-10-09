import { HtmlElements } from "../constants/htmlElements.js"
import { getData } from "../services/get-data.js"

const htmlElements = new HtmlElements

export const engine = () => {
    htmlElements.currencyOne.addEventListener('change', calculate)
    htmlElements.currencyTwo.addEventListener('change', calculate)
    htmlElements.amountOne.addEventListener('change', calculate)
    htmlElements.amountTwo.addEventListener('change', calculate)
    htmlElements.swapButton.addEventListener('click', calculate)
}

export const calculate = async (event) => {
    if (event?.currentTarget === htmlElements.swapButton) {
        const current_once = htmlElements.currencyOne.value
        htmlElements.currencyOne.value = htmlElements.currencyTwo.value
        htmlElements.currencyTwo.value = current_once
    }

    const current_once = htmlElements.currencyOne.value
    const current_two = htmlElements.currencyTwo.value
    const amountOne = Number(htmlElements.amountOne.value)

    const rate = await getData()
    const initialRate = rate[current_two] / rate[current_once]

    htmlElements.rate.textContent = `1 ${current_once} = ${initialRate.toFixed(4)} ${current_two}`

    htmlElements.amountTwo.value = (amountOne * initialRate).toFixed(2)
}