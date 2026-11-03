import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { BROWSER_ONLY_NOTICE } from "./notices";

test("the browser-only notice is the required sentence and is wired into save and My tanks", () => {
  assert.equal(
    BROWSER_ONLY_NOTICE,
    "Saved in this browser only. Clearing your browser data or switching devices will lose it. Sign in with your email to keep your tanks on any device.",
  );
  const actions = readFileSync(new URL("../components/TankActions.tsx", import.meta.url), "utf8");
  const list = readFileSync(new URL("../components/MyTanksList.tsx", import.meta.url), "utf8");
  assert.match(actions, /BROWSER_ONLY_NOTICE/);
  assert.match(list, /BROWSER_ONLY_NOTICE/);
});
