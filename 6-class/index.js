class Car {
    #label;
    #model;
    #mileage;
    #twist = false;
    #initialMileage;

    constructor(label, model, mileage) {
        this.#label = label;
        this.#model = model;
        this.#mileage = mileage;
        this.#initialMileage = mileage;
    }

    get mileage() {
        return this.#mileage;
    }


    set mileage(mileage) {
        if (this.#initialMileage > mileage) {
            this.#twist = true;
        }
        this.#mileage = mileage;
    }



    info() {
        console.log(`Марка автомобиля: ${this.#label} модель:${this.#model} пробег: ${this.#mileage}`)
    }

    twistMileage() {
        return this.#twist;
    }


}

const carMil = new Car('bmw', 'x3', '2000');
console.log(carMil);
carMil.mileage = 5000;
console.log(carMil);
carMil.mileage = 1000;
carMil.info();
carMil.twistMileage();
console.log(carMil);