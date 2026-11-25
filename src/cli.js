import { pathToFileURL } from "node:url";
import { greet } from "./greeting.js";
import { HELP_TEXT, parseArgs } from "./cli-args.js";

export function run(args, io = { stdout: console.log, stderr: console.error }) {
  const parsed = parseArgs(args);

  if (parsed.help) {
    io.stdout(HELP_TEXT);
    return 0;
  }

  if (parsed.error) {
    io.stderr(parsed.error);
    return 1;
  }

  io.stdout(greet(parsed.name));
  return 0;
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  process.exitCode = run(process.argv.slice(2));
}