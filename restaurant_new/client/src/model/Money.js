class Money {
    constructor (amount, currency) {
        this.setAmount(amount)
        this.setCurrency(currency)
    }
    // HW*: encapsulate both: amount, currency
    //    : don't allow negative amount
    //    : allow only: 'EUR', 'MDL', 'USD' for currency

    getAmount() {
        return this.amount
    }

    setAmount(value) {
        if (value < 0) {
            throw new Error("Amount cannot be negative!")
        }
        this.amount = value
    }

    getCurrency() {
        return this.currency
    }

    setCurrency(value) {
        const allowedCurrency = 'EUR'
        if (!allowedCurrency.includes(value)) {
            throw new Error(`Allow only: ${allowedCurrency} for currency!`)
        }
        this.currency = value
    }
}

export {Money}