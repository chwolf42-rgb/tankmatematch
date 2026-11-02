import assert from "node:assert/strict";
import test from "node:test";
import { normalizeEmail, normalizeEmailCode } from "./email-otp";

test("sign-in accepts an email and a 6-digit code, not a phone number", () => {
  assert.equal(normalizeEmail("  User@Example.com "), "user@example.com");
  assert.equal(normalizeEmail("not-an-email"), null);
  assert.equal(normalizeEmail("+15551234567"), null);
  assert.equal(normalizeEmail("15551234567"), null);
  assert.equal(normalizeEmail(""), null);

  assert.equal(normalizeEmailCode(" 123456 "), "123456");
  assert.equal(normalizeEmailCode("12345"), null);
  assert.equal(normalizeEmailCode("1234567"), null);
  assert.equal(normalizeEmailCode("12a456"), null);
  assert.equal(normalizeEmailCode("+155512"), null);
});
