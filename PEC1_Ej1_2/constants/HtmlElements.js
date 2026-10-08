export class HtmlElements {
    constructor() {
        this.form = document.querySelector("#exchange-form");
        this.amount = document.querySelector("#amount");
        this.baseCurrency = document.querySelector("#base-currency");
        this.targetCurrency = document.querySelector("#target-currency");
        this.loading = document.querySelector("#loading");
        this.error = document.querySelector("#error");
        this.result = document.querySelector("#result");
    }
}
