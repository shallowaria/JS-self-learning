class Car {
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
        this.speed = Number(carDetails.speed ?? 0);
    }

    displayInfo() {
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';
        console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${trunkStatus}`);
    }

    go() {
        if(!this.isTrunkOpen){
            this.speed += 5;
        }

        if (this.speed > 200) {
            this.speed = 200;
        }
    }

    brake() {
        this.speed -= 5;
        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    openTrunk() {
        if (this.speed === 0) {
            this.isTrunkOpen = true;
        }
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }
}

const car1 = new Car({
    brand: 'Toyota',
    model: 'Corolla',
    speed: '150'
});

const car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3',
});

console.log(car1);
console.log(car2);

car1.displayInfo();
car2.displayInfo();

car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.go();
car1.displayInfo();

car2.go();
car2.displayInfo();
car2.brake();
car2.openTrunk();
car2.go();
car2.go();
car2.displayInfo();

class RaceCar extends Car {
    acceleration;

    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go() {
        this.speed += this.acceleration;
        if (this.speed > 300) {
            this.speed = 300;
        }
    }

    openTrunk() {
        console.log('Race cars do not have a trunk.');
    }
    closeTrunk() {
        console.log('Race cars do not have a trunk.');
    }
}

const raceCar = new RaceCar({
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20
});

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();
raceCar.brake();
raceCar.displayInfo();