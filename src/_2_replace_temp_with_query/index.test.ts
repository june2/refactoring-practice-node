import test from "node:test";
import { strict as assert } from "node:assert";
import { Order } from ".";

test("quantity * price 값이 1000 초과할때", () => {
  // given
  const quantity = 1;
  const price = 500;
  const order = new Order(quantity, price);
  // when
  const result = order.getPrice();
  // then
  assert.strictEqual(result, 490);
});

test("quantity * price 값이 1000 미만일때", () => {
  // given
  const quantity = 5;
  const price = 500;
  const order = new Order(quantity, price);
  // when
  const result = order.getPrice();
  // then
  assert.strictEqual(result, 2375);
});
