import test from "node:test";
import { strict as assert } from "node:assert";
import { ReplaceTempWithQuery4 } from "../../../main/solution/_2_replace_temp_with_query/replace-temp-with-query4";

test("quantity * price 값이 1000 이하의 경우", () => {
    // given
    const quantity = 1;
    const price = 500;
    const replaceTempWithQuery = new ReplaceTempWithQuery4(quantity, price);
    // when
    const result = replaceTempWithQuery.getPrice();
    // then
    assert.strictEqual(result, 784);
});

test("quantity * price 값이 1000 초과일 때", () => {
    // given
    const quantity = 5;
    const price = 500;
    const replaceTempWithQuery = new ReplaceTempWithQuery4(quantity, price);
    // when
    const result = replaceTempWithQuery.getPrice();
    // then
    assert.strictEqual(result, 2280);
});
