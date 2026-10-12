import { HtmlElements } from "../constants/HtmlElements.js";
import { getCurrencyData } from "../services/get-data.js";
import { setMovieData, updateSelectedCount } from "../store/local-storage.js";

const htmlElements = new HtmlElements
 let currencyUSDReferenceValue = 1

export const listeners = (ticketPrice) => {
    htmlElements.movieSelect.addEventListener('change', event => {
        ticketPrice = +event.target.value;
        setMovieData(event.target.selectedIndex, event.target.value);
        updateSelectedCount(ticketPrice);
    });

    htmlElements.container.addEventListener('click', event => {
        if (
            event.target.classList.contains('seat') &&
            !event.target.classList.contains('occupied')
        ) {
            event.target.classList.toggle('selected');

            updateSelectedCount(ticketPrice);
        }
    });

    htmlElements.currencySelect.addEventListener('change', async e => {
        const currency = e.target.value
        const rates = await getCurrencyData();
        currencyUSDReferenceValue = rates[currency];
        setMovieData(htmlElements.movieSelect.selectedIndex, ticketPrice * currencyUSDReferenceValue)
        updateSelectedCount(ticketPrice * currencyUSDReferenceValue)
    })

}


