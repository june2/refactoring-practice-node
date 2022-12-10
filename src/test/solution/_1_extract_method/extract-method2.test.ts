import test from "node:test";
import { strict as assert } from "node:assert";
import sinon from 'sinon';
import { ExtractMethod2 } from "../../../main/solution/_1_extract_method/extract-method2";


let spy = sinon.spy(console, 'log');

test("pattern함수에 path 문자를 입력하여 유효여부 판단하여 boolean값을 반환한다.", () => {
  //given  
  const extractMethod2 = new ExtractMethod2();
  //when  
  //then
  assert.strictEqual(extractMethod2.isPattern("/test/*"), true);
  assert.strictEqual(extractMethod2.isPattern("/test/**/name"), true);
  assert.strictEqual(extractMethod2.isPattern("/test?"), true);
  assert.strictEqual(extractMethod2.isPattern("/test/{name}"), true);
  assert.strictEqual(extractMethod2.isPattern("/test/name"), false);
  assert.strictEqual(extractMethod2.isPattern("/test/foo{bar"), false);
});

