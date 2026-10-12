export class HtmlElements {
    constructor() {
        this.container = document.querySelector('.container');
        this.seats = document.querySelectorAll('.row .seat:not(.occupied)');
        this.count = document.getElementById('count');
        this.total = document.getElementById('total');
        this.movieSelect = document.getElementById('movie');

    }
}
