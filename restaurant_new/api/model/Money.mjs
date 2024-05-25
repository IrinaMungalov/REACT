class Money {
    constructor (amount, currency) {
        this.amount = amount
        this.currency = currency
    }
    // HW*: encapsulate both: amount, currency
    //    : don't allow negative amount
    //    : allow only: 'EUR', 'MDL', 'USD' for currency
}

export {Money}