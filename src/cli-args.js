export const HELP_TEXT = `Usage: codex-lab [options]

Options:
  --name <name>  Name to greet
  --help, -h     Show this help message`;
export function parseArgs(args) {
  let name;

  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];

    if (argument === "--help" || argument === "-h") {
      return { help: true };
    }

    if (argument === "--name") {
      const value = args[index + 1];
      if (!value || value.startsWith("--")) {
        return { error: "缺少 --name 的值" };
      }
      name = value;
      index += 1;
      continue;
    }

    return { error: `未知参数：${argument}` };
  }

  return { name };
}