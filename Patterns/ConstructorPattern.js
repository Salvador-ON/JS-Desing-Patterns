function Car (name, color, isAutomatic) {
  this.name = name;
  this.color = color;
  this.isAutomatic = isAutomatic || false;

  this.transmissionType = function() {
    console.log(this.isAutomatic ? "This car is Automatic" : "This car is manual");
  }
}

const car1 = new Car("SX", "red", true);
const car2 = new Car("LX", "blue");

car1.transmissionType();
car2.transmissionType();
