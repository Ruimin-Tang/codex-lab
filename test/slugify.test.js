import test from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../src/slugify.js";

test("lowercases words and joins them with a single hyphen", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});

test("removes punctuation and collapses repeated separators", () => {
  assert.equal(slugify("  Hello,   GitHub!!  "), "hello-github");
  assert.equal(slugify("---Hello___World---"), "hello-world");
});

test("removes common Latin diacritics", () => {
  assert.equal(slugify("Café Déjà Vu"), "cafe-deja-vu");
});

test("preserves letters and numbers from non-Latin scripts", () => {
  assert.equal(slugify("中文 测试 2026"), "中文-测试-2026");
});

test("returns an empty string when no letters or numbers remain", () => {
  assert.equal(slugify("!!!"), "");
  assert.equal(slugify("   "), "");
});