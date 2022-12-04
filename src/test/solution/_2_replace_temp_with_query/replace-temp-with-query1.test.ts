import test from "node:test";
import { strict as assert } from "node:assert";
import { ReplaceTempWithQuery1 } from "../../../main/solution/_2_replace_temp_with_query/replace-temp-with-query1";

test("quantity * price 값이 1000 이하의 경우", () => {
  // given
  const quantity = 1;
  const price = 500;
  const replaceTempWithQuery1 = new ReplaceTempWithQuery1(quantity, price);
  // when
  const result = replaceTempWithQuery1.getPrice();
  // then
  assert.strictEqual(result, 490);
});

test("quantity * price 값이 1000 초과일 때", () => {
  // given
  const quantity = 5;
  const price = 500;
  const replaceTempWithQuery1 = new ReplaceTempWithQuery1(quantity, price);
  // when
  const result = replaceTempWithQuery1.getPrice();
  // then
  assert.strictEqual(result, 2375);
});
