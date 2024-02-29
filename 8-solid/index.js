class Billing {
    amount;

    constructor(amount = 0) {
        this.amount = amount;
    }

    calculateTotal() {

    }


}

class FixBilling extends Billing {
    constructor(amount) {
        super(amount);
    }

    calculateTotal() {
        return this.amount;
    }
}

class HourBilling extends Billing {
    constructor(amount) {
        super(amount);
    }

    calculateTotal(hour) {
        return this.amount * hour;
    }
}

class ItemBilling extends Billing {
    constructor(amount) {
        super(amount);
    }

    calculateTotal(countItems) {
        return this.amount * countItems;
    }
}

const billing = new FixBilling();
const billing2 = new HourBilling(5);
const billing3 = new ItemBilling(10);



console.log(billing.calculateTotal())
console.log(billing2.calculateTotal(10))
console.log(billing3.calculateTotal(10))


