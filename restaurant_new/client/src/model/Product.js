// HW*: encapsulate 'name' property
//    : don't allow empty product name
//    : if name is empty - throw an error with message "Invalid product name"
    

class Product {
    constructor(name, image, price) {
        this.setName(name)
        this.image = image
        this.price = price
    }

    getName() {
        return this.name
    }

    setName(value) {
        if (!value || value.trim() === '') {
            throw new Error("Invalid product name")
        }
        this.name = value
    }

}

export { Product }