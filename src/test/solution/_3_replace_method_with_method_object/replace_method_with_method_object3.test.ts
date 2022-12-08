import test from "node:test";
import { strict as assert } from "node:assert";
import { ReplaceMethodWithMethodObject1 } from "../../../main/solution/_3_replace_method_with_method_object/_1/replace_method_with_method_object1";

test("delta값은 50으로 하고, gamma 메소드에 인자값을 100(입력값), 3(수량), 500(년수) 입력하면 349860을 반환한다", () => {
  // given
  const delta = 50;
  const replaceMethodWithMethodObject = new ReplaceMethodWithMethodObject1(delta);
  // when
  const result = replaceMethodWithMethodObject.gamma(100, 3, 500);
  // then
  assert.strictEqual(result, 349860);
});

test("delta값은 50으로 하고, gamma 메소드에 인자값을 100(입력값), 4(수량), 500(년수) 입력하면 349800을 반환한다", () => {
  // given
  const delta = 50;
  const replaceMethodWithMethodObject = new ReplaceMethodWithMethodObject1(delta);
  // when
  const result = replaceMethodWithMethodObject.gamma(100, 4, 500);
  // then
  assert.strictEqual(result, 349800);
});
