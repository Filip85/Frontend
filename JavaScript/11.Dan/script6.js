let today = new Date();

function CarRegistration(name, surname, date, carBrand, carModel, hp, dateOfFirstReg) {
    this.name = name,
    this.surname = surname,
    this.date = date,
    this.carBrand = carBrand,
    this.carModel = carModel,
    this.hp = hp,
    this.dateOfFirstReg = dateOfFirstReg,
    this.age = function () {
        return Math.abs(this.date.getFullYear() -  today.getFullYear()) < 18 ? false : 
            Math.abs(this.date.getFullYear() -  today.getFullYear()) < 21 && this.hp > 100 ? false : true; 
    },
    this.price = function() {
        return this.dateOfFirstReg.getFullYear() < 10 ? 1250 : 1450 ;
    },
    this.registration = function() {
        let ageCheck = this.age();
        let priceCheck = this.price();
   
        if(ageCheck) {
            return `Owner: ${this.name} \nBorn: ${this.date.toLocaleDateString()} \nCar: ${this.carBrand} ${this.carModel} \nPrice ${priceCheck} \nRegistration is valid till : ${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear() + 1}`;
        }
        else {
            return "Not today, my son!";
        }
    }
};

let car = new CarRegistration("filip", "filip", new Date(1998, 4, 14), "BMW", "M3", 500, new Date(1989, 2, 10));

console.log(car.registration());
