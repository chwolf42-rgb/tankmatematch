import assert from "node:assert/strict";
import test from "node:test";
import { checkerShareUrl, networkShareUrl, SHARE_NETWORKS, shareMediaUrl, shareText } from "./share";
import { site } from "./site";

const page = "https://tankmatematch.com/checker?tank=20&f=betta,neon-tetra";
const text = "Tank mate check: Betta, Neon tetra in 20 gallons";

test("a share link points at the checker with the selection in the query", () => {
  assert.equal(checkerShareUrl("https://tankmatematch.com/", ["betta", "neon-tetra"], 20), page);
  assert.equal(checkerShareUrl("http://localhost:3000", ["betta"], null), "http://localhost:3000/checker?f=betta");
});

test("share text names the fish and the gallon size when one is set", () => {
  assert.equal(shareText(["Betta", "Neon tetra"], 20), text);
  assert.equal(shareText(["Betta"], null), "Tank mate check: Betta");
  assert.equal(shareText([], null), "Tank mate check: a freshwater tank");
});

test("network share URLs are plain links with no tracker parameters", () => {
  const media = shareMediaUrl();
  assert.equal(media, `${site.url}/og.png`);
  const expected: Record<(typeof SHARE_NETWORKS)[number]["id"], string> = {
    pinterest: `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(page)}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(text)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(page)}`,
    reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(page)}&title=${encodeURIComponent(text)}`,
    x: `https://x.com/intent/post?url=${encodeURIComponent(page)}&text=${encodeURIComponent(text)}`,
  };
  for (const network of SHARE_NETWORKS) {
    const href = networkShareUrl(network.id, page, text, media);
    assert.equal(href, expected[network.id]);
    assert.equal(href.startsWith("https://"), true);
    assert.equal(href.includes("javascript:"), false);
    assert.equal(href.includes("utm_"), false);
  }
});
