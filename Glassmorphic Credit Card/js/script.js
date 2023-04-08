const cleaveCC = new Cleave("#cardNumber", {
    creditCard: true,
    delimiter: "-",
    onCreditCardTypeChanged: function (type) {
        const cardBrand = document.getElementById('cardBrand'),
        visa = "fab fa-cc-visa",
        mastercard = "fab fa-cc-mastercard",
        amex = "fab fa-cc-amex",
        diners = "fab fa-cc-diners-club",
        jcb = "fab fa-cc-jcb",
        discover = "fab fa-cc-discover";

        switch (type) {
            case "visa":
                cardBrand.setAttribute("class", visa);
                break;
            case "visa":
                    cardBrand.setAttribute("class", visa);
                    break;
        }
    },
});