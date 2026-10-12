import { HtmlElements } from "./constants/HtmlElements.js"
import { listeners } from "./events/events.js";
import { populateUI, setMovieData, updateSelectedCount } from "./store/local-storage.js";

const htmlElements = new HtmlElements


populateUI()

let ticketPrice = +htmlElements.movieSelect.value;

setMovieData(htmlElements.movieSelect.selectedIndex, ticketPrice);
updateSelectedCount(ticketPrice)

listeners(ticketPrice)


updateSelectedCount(ticketPrice);

