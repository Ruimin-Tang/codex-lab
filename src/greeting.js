export function greet(name = "Codex") {
  const normalized = String(name).trim();
  return `你好，${normalized || "Codex"}！`;
}