import assert from "node:assert/strict";
import test from "node:test";
import { isCurrentPage, normalizePath } from "./nav";

test("trailing slashes do not change the active nav page", () => {
  assert.equal(normalizePath("/checker/"), "/checker");
  assert.equal(normalizePath("/methodology///"), "/methodology");
  assert.equal(normalizePath("/"), "/");
  assert.equal(isCurrentPage("/checker/", "/checker"), true);
  assert.equal(isCurrentPage("/species", "/species/"), true);
  assert.equal(isCurrentPage("/species/betta", "/species"), false);
  assert.equal(isCurrentPage("/checker", "/methodology"), false);
});
