import test from "node:test";
import assert from "node:assert/strict";
import { run } from "../src/cli.js";

function execute(args) {
  let stdout = "";
  let stderr = "";
  const code = run(args, {
    stdout: (message) => { stdout += `${message}\n`; },
    stderr: (message) => { stderr += `${message}\n`; },
  });
  return { code, stdout, stderr };
}

test("prints help and exits successfully", () => {
  const result = execute(["--help"]);
  assert.equal(result.code, 0);
  assert.match(result.stdout, /Usage: codex-lab/);
  assert.match(result.stdout, /--name <name>/);
  assert.equal(result.stderr, "");
});

test("supports the short help flag", () => {
  const result = execute(["-h"]);
  assert.equal(result.code, 0);
  assert.match(result.stdout, /Usage: codex-lab/);
});

test("rejects unknown arguments with a nonzero exit code", () => {
  const result = execute(["--unknown"]);
  assert.equal(result.code, 1);
  assert.match(result.stderr, /未知参数：--unknown/);
  assert.equal(result.stdout, "");
});

test("reports a missing --name value", () => {
  const result = execute(["--name"]);
  assert.equal(result.code, 1);
  assert.match(result.stderr, /缺少 --name 的值/);
});

test("greets the provided name", () => {
  const result = execute(["--name", "GitHub"]);
  assert.equal(result.code, 0);
  assert.equal(result.stdout.trim(), "你好，GitHub！");
  assert.equal(result.stderr, "");
});