export class ReplaceTempWithQuery2 {
  private quantity: number;
  private itemPrice: number;

  constructor(quantity: number, itemPrice: number) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }
 
  getPrice() {
    return this.getTwoItemPrice() * this.getDiscountFactor();
  }

  getDiscountFactor(): number {
    return (this.getBasePrice() > 1000) ? 0.95 : 0.98;
  }

  getBasePrice(): number {
    return this.quantity * this.itemPrice;
  }

  getTwoItemPrice(): number {
    return this.itemPrice * 2;
  }

}
