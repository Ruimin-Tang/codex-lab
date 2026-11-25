import { greet } from "./greeting.js";

const args = process.argv.slice(2);
const nameIndex = args.indexOf("--name");
const name = nameIndex >= 0 ? args[nameIndex + 1] : undefined;

if (nameIndex >= 0 && !name) {
  console.error("缺少 --name 的值");
  process.exitCode = 1;
} else {
  console.log(greet(name));
}