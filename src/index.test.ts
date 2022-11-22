import { strict as assert } from "node:assert"
import test from "node:test"
import { calculate } from "."

test("계산 테스트 성공", () => {
  // given
  const a = 10
  const b = 10

  // when
  const result = calculate(a, b)

  // then
  assert.strictEqual(20, result)
})
