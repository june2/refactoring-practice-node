export class ReplaceTempWithQuery4 {
  private quantity: number;
  private itemPrice: number;

  constructor(quantity: number, itemPrice: number) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }
  
  getPrice(): number {
    this.increaseQuantity();
    this.decreaseItemPrice();
    return this.getBasePrice() * this.getDiscountFactor();
  }

  getBasePrice(): number {
    return this.quantity * this.itemPrice;
  }

  getDiscountFactor(): number {
    return (this.getBasePrice() > 1000) ? 0.95 : 0.98;
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseItemPrice(): void {
    this.itemPrice -= 100;
  }
}
