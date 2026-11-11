import assert from "node:assert/strict";
import test from "node:test";
import { checkSelection } from "./checker";
import { planAdditions } from "./planner";

test("a betta works with a small danio only under the cited conditions", () => {
  const neon = checkSelection(["betta", "neon-tetra"], null);
  assert.equal(neon.verdict, "caution");
  assert.equal(neon.pairs[0].reasons.some((reason) => reason.code === "works-if"), false);

  const danio = checkSelection(["betta", "zebra-danio"], null);
  assert.equal(danio.verdict, "works-if");
  assert.match(danio.pairs[0].reasons.find((reason) => reason.code === "works-if")?.text ?? "", /single betta/);
  assert.match(danio.pairs[0].reasons.find((reason) => reason.code === "works-if")?.text ?? "", /surface cover/);

  const guppy = checkSelection(["betta", "guppy"], null);
  assert.equal(guppy.verdict, "incompatible");
});

test("the planner ranks compatible before works-if and flags an overstocked estimate", () => {
  const plan = planAdditions(["neon-tetra"], 40);
  assert.ok(plan.suggestions.some((row) => row.verdict === "compatible"));
  const firstWorksIf = plan.suggestions.findIndex((row) => row.verdict === "works-if");
  const lastCompatible = plan.suggestions.reduce((index, row, position) => (row.verdict === "compatible" ? position : index), -1);
  if (firstWorksIf !== -1) assert.ok(lastCompatible < firstWorksIf);
  assert.equal(plan.suggestions.some((row) => row.verdict === "caution" || row.verdict === "incompatible"), false);

  const withBetta = planAdditions(["betta"], null);
  assert.equal(withBetta.suggestions.some((row) => row.slug === "zebra-danio" && row.verdict === "works-if"), true);
  assert.equal(withBetta.suggestions.some((row) => row.slug === "neon-tetra"), false);

  const tight = planAdditions(["zebra-danio"], 5);
  assert.equal(tight.stocking.overstocked, true);
  assert.ok(tight.stocking.inches > 5);
});
