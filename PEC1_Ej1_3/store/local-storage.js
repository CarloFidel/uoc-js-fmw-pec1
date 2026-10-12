import { HtmlElements } from "../constants/HtmlElements.js";
import { getCurrencyData } from "../services/get-data.js";

const htmlElements = new HtmlElements

const rate = await getCurrencyData()



export const setMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice );
}

export const updateSelectedCount = (ticketPrice) => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(seat => [...htmlElements.seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    htmlElements.count.innerText = selectedSeatsCount; 
    htmlElements.total.innerText =(selectedSeatsCount * ticketPrice).toFixed(2);

    setMovieData(htmlElements.movieSelect.selectedIndex, htmlElements.movieSelect.value);
}

export const populateUI = () => {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        htmlElements.seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        htmlElements.movieSelect.selectedIndex = selectedMovieIndex;
    }
}
