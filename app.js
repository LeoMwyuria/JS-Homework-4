class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Developer extends Employee {
    constructor(name, age, programmingLanguages) {
        super(name, age);
        this.programmingLanguages = programmingLanguages;
    }

    getProgrammingLanguages() {
        return `Programming Languages: ${this.programmingLanguages.join(', ')}`;
    }
}

class Marketer extends Employee {
    constructor(name, age, marketingTools) {
        super(name, age);
        this.marketingTools = marketingTools;
    }

    getMarketingTools() {
        return `Marketing Tools: ${this.marketingTools.join(', ')}`;
    }
}

class Accountant extends Employee {
    constructor(name, age, accountingSoftware) {
        super(name, age);
        this.accountingSoftware = accountingSoftware;
    }

    getAccountingSoftware() {
        return `Accounting Software: ${this.accountingSoftware.join(', ')}`;
    }
}

const dev = new Developer('Alice', 30, ['JavaScript', 'Python', 'C++']);
console.log(dev.getDetails());
console.log(dev.getProgrammingLanguages());

const marketer = new Marketer('Bob', 25, ['Google Analytics', 'Hootsuite']);
console.log(marketer.getDetails());
console.log(marketer.getMarketingTools());

const accountant = new Accountant('Charlie', 28, ['QuickBooks', 'Xero']);
console.log(accountant.getDetails());
console.log(accountant.getAccountingSoftware());

class CarFactory {
    constructor() {
        this.cars = [];
        this.nextId = 1;
    }

    addCar(make, model, year) {
        const car = {
            id: this.nextId++,
            make,
            model,
            year
        };
        this.cars.push(car);
        return car;
    }

    deleteCar(id) {
        const index = this.cars.findIndex(car => car.id === id);
        if (index !== -1) {
            this.cars.splice(index, 1);
            return true;
        }
        return false;
    }

    updateCar(id, updatedInfo) {
        const car = this.cars.find(car => car.id === id);
        if (car) {
            Object.assign(car, updatedInfo);
            return car;
        }
        return null;
    }

    getAllCars() {
        return this.cars;
    }
}

const factory = new CarFactory();

const car1 = factory.addCar('Toyota', 'Corolla', 2020);
const car2 = factory.addCar('Honda', 'Civic', 2019);
console.log(factory.getAllCars());

const updatedCar = factory.updateCar(car1.id, { model: 'Camry', year: 2021 });
console.log(updatedCar);
console.log(factory.getAllCars());

const deleteSuccess = factory.deleteCar(car2.id);
console.log(deleteSuccess);
console.log(factory.getAllCars());
