# codex-lab 项目规则

## 项目目标

本仓库只用于验证 Codex 的 GitHub 协作流程，保持依赖最少、命令稳定、测试快速。

## 命令

```powershell
npm run lint
npm test
npm run build
npm start -- --name Codex
```

## 约束

- 使用 Node.js 20+。
- 优先使用 Node.js 内置模块，不新增依赖，除非有明确收益。
- 功能修改必须同时补充测试。
- 不修改 `.github/workflows/ci.yml` 来绕过失败。
- 完成后必须运行 `npm run lint`、`npm test` 和 `npm run build`。

## 验收标准

- lint 通过
- 测试全部通过
- 构建检查全部通过
- 变更范围与 Issue 一致
- 说明未验证项或残余风险