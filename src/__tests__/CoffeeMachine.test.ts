import { Drink } from '../Drink';
import { CoffeeMachine } from '../CoffeeMachine';

describe("CoffeeMachine", () => {
  it("should give 5th drink for free if you have loyalty card", () => {
    //Arrange
    const insertedmoney=0
    const loyaltycard=true
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "small");
    //Act
    machine.serve(drink, 2, loyaltycard, 10);
    machine.serve(drink, 2, loyaltycard, 10);
    machine.serve(drink, 2, loyaltycard, 10);
    machine.serve(drink, 2, loyaltycard, 10);
    //Act and Assert
    expect(machine.serve(drink, insertedmoney, loyaltycard, 10)).toBe("Serving Coffee (small)");
  });

  it("shouldn't give 5th drink for free if you have loyalty card and a large drink", () => {
    //Arrange
    const insertedmoney=3
    const loyaltycard=true
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "large");
    //Act
    machine.serve(drink, 3, loyaltycard, 10);
    machine.serve(drink, 3, loyaltycard, 10);
    machine.serve(drink, 3, loyaltycard, 10);
    machine.serve(drink, 3, loyaltycard, 10);
    //Act and Assert
    expect(machine.serve(drink, insertedmoney, loyaltycard, 10)).toBe("Serving Coffee (large)");
  });

  it("should serve coffee if exact money is inserted", () => {
    //Arrange
    const insertedmoney=2
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "small");
    //Act and Assert
    expect(machine.serve(drink, insertedmoney, false, 10)).toBe("Serving Coffee (small)");
  });

  it("should serve coffee and give change if more money is inserted", () => {
    //Arrange
    const insertedmoney=3
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "small");
    //Act and Assert
    expect(machine.serve(drink, insertedmoney, false, 10)).toBe("Serving Coffee (small) with change 1.00");
  });

  it("shouldn't serve coffee if not enough money is inserted", () => {
    //Arrange
    const insertedmoney=1
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "small");
    //Act and Assert
    expect(machine.serve(drink, insertedmoney, false, 10)).toBe("Not enough money");
  });

  it("should serve coffee with 20% discount during Happy Hour", () => {
    //Arrange
    const happyhour=15
    const insertedmoney=2
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "small");
    //Act and Assert
    expect(machine.serve(drink, insertedmoney, false, happyhour)).toBe("Serving Coffee (small) with change 0.40");
  });

  it("should give change in 2 decimals", () => {
    //Arrange
    const insertedmoney=3
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "small");
    //Act and Assert
    expect(machine.serve(drink, insertedmoney, false, 10)).toBe("Serving Coffee (small) with change 1.00");
  });
  it("should give error when price of drink is 0 or less", () => {
    //Arrange
    const drinkprice=0
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", drinkprice, false, 0, "small");
    //Act and Assert
    expect(machine.serve(drink, 2, false, 10)).toBe("Error: invalid price");
  });

  it("should give error when there are 6 or more sugar cubes", () => {
    //Arrange
    const sugarcubes=6
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, sugarcubes, "small");
    //Act and Assert
    expect(machine.serve(drink, 2, false, 10)).toBe("Error: too much sugar");
  });

  it("should add +10 cents to price of drink per sugar cube starting from 3 to 5 sugar cubes", () => {
    //Arrange
    const sugarcubes=5
    const insertedmoney=3
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, sugarcubes, "small");
    //Act and Assert
    expect(machine.serve(drink, insertedmoney, false, 10)).toBe("Serving Coffee (small) with change 0.70");
  });

  it("shouldn't change price of drink when there are 1 or 2 sugar cubes", () => {
    //Arrange
    const sugarcubes=2
    const insertedmoney=3
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, sugarcubes, "small");
    //Act and Assert
    expect(machine.serve(drink, insertedmoney, false, 10)).toBe("Serving Coffee (small) with change 1.00");
  });
  it("should add +20 cents to price of drink when there is added milk", () => {
    //Arrange
     const insertedmoney=3
    const addedmilk=true
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, addedmilk, 0, "small");
    //Act and Assert
    expect(machine.serve(drink, insertedmoney, false, 10)).toBe("Serving Coffee (small) with change 0.80");
  });
  it("should add +50 cents to price of drink when size is medium", () => {
    //Arrange
    const insertedmoney=3
    const sizedrink="medium"
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, sizedrink);
    //Act and Assert
    expect(machine.serve(drink, insertedmoney, false, 10)).toBe("Serving Coffee (medium) with change 0.50");
  });

  it("should add +1 euro to price of drink when size is large", () => {
    //Arrange
    const insertedmoney=3
    const sizedrink="large"
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, sizedrink);
    //Act and Assert
    expect(machine.serve(drink, insertedmoney, false, 10)).toBe("Serving Coffee (large)");
  });
});