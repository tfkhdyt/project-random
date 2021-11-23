class Main {
  constructor() {
    this._anjay = 6;
  }
  
  get anjay() {
    return this._anjay + 9;
  }
}

const obj = new Main();
// console.log(obj.anjay);
console.log(obj.anjay);