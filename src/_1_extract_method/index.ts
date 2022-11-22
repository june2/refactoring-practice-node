export class Order {
  private quantity: number;
  private price: number;

  constructor(quantity: number, price: number) {
    this.quantity = quantity;
    this.price = price;
  }

  getPrice() {
    let basePrice = this.quantity * this.price;
    let discountFactor;
    if (basePrice > 1000) {
      discountFactor = 0.95;
    } else {
      discountFactor = 0.98;
    }
    return basePrice * discountFactor;
  }
}
