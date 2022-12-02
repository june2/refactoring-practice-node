import test from "node:test";
import { strict as assert } from "node:assert";
import { ExtractMethod } from "./extract-method";


test("quantity * price 값이 1000 초과할때", () => {
  // given
  const extractMethod = new ExtractMethod("Sonny", [1000.0, 2000.0, 3000.0]);
  extractMethod.printOwing();
});

