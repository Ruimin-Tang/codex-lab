import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/greeting.js";

test("uses Codex as the default name", () => {
  assert.equal(greet(), "你好，Codex！");
});

test("greets the provided name", () => {
  assert.equal(greet("GitHub"), "你好，GitHub！");
});

test("normalizes whitespace and handles empty input", () => {
  assert.equal(greet("  Alice  "), "你好，Alice！");
  assert.equal(greet("   "), "你好，Codex！");
});