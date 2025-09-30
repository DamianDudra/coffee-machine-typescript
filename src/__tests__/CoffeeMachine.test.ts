import { Drink } from '../Drink';
import { CoffeeMachine } from '../CoffeeMachine';

describe("CoffeeMachine", () => {
  it("should serve coffee if exact money inserted", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "small");

    expect(machine.serve(drink, 2, false, 10)).toBe("Serving Coffee (small)");
  });
  it("should give 5th drink for free if you have loyalty card", () => {
    const machine = new CoffeeMachine();
    
    //Arrange
    const drink = new Drink("Coffee", 2, false, 0, "small");
    machine.serve(drink, 2, false, 10)
    machine.serve(drink, 2, false, 10)
    machine.serve(drink, 2, false, 10)
    machine.serve(drink, 2, false, 10)

    expect(machine.serve(drink, 0, true, 10)).toBe("Serving Coffee(small)");
  });
  it("shouldn't give 5th drink for free if you have loyalty card and a large drink", () => {
    const machine = new CoffeeMachine();
    //Arrange
    const drink = new Drink("Coffee", 2, false, 0, "large");
    machine.serve(drink, 3, false, 10)
    machine.serve(drink, 3, false, 10)
    machine.serve(drink, 3, false, 10)
    machine.serve(drink, 3, false, 10)

    expect(machine.serve(drink, 3, true, 10)).toBe("Serving Coffee (large)");
  });

  it("should serve coffee and change if more money is inserted", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "small");

    expect(machine.serve(drink, 3, false, 10)).toBe("Serving Coffee (small) with change 1.00");
  });
  it("shouldnt serve coffee if enough money isn't inserted", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "small");

    expect(machine.serve(drink, 1, false, 10)).toBe("Not enough money");
  });

  it("should serve coffee with 20% discount during Happy Hour", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "small");

    expect(machine.serve(drink, 2, false, 15)).toBe("Serving Coffee (small) with change 0.40");
  });
  it("should serve coffee with 20% discount during Happy Hour", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "small");

    expect(machine.serve(drink, 2, false, 15)).toBe("Serving Coffee (small) with change 0.40");
  });
});

describe("Drink", () =>{
  it("should serve coffee with 20% discount during Happy Hour", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "small");

    expect(machine.serve(drink, 2, false, 15)).toBe("Serving Coffee (small) with change 0.40");
  });
  it("should give error when price of drink is 0 or less", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 0, false, 0, "small");

    expect(machine.serve(drink, 2, false, 15)).toBe("Error: invalid price");
  });
  it("should give error when there are 6 or more sugar cubes", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 6, "small");

    expect(machine.serve(drink, 2, false, 15)).toBe("Error: too much sugar");
  });
  it("should make price of drink +10 cents for each sugar cube if there are 3 and less than 6", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 5, "small");

    expect(machine.serve(drink, 2.30, false, 10)).toBe("Serving Coffee (small)");
  });
  it("should make price of drink +10 cents for each sugar cube if there are 3 and less than 6", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, true, 0, "small");

    expect(machine.serve(drink, 2.20, false, 10)).toBe("Serving Coffee (small)");
  });
  it("should make price of drink +50 cents when size is medium", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "medium");

    expect(machine.serve(drink, 2.50, false, 10)).toBe("Serving Coffee (medium)");
  });
  it("should make price of drink +1 euro when size is large", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "large");

    expect(machine.serve(drink, 3, false, 10)).toBe("Serving Coffee (large)");
  });
  
});