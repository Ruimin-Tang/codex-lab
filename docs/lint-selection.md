# Lint Tool Selection

## 需求

为当前小型 JavaScript 项目增加最小 lint 工作流，要求：

- 维护活跃
- 许可证兼容
- 安装和依赖成本低
- 能接入 `npm run lint` 和 GitHub Actions
- 与本机 Node.js 22.11.0 兼容

## 候选方案

| 方案 | 最新版本 | 许可证 | 核心依赖 | 维护状态 | 兼容性 | 结论 |
|---|---:|---|---|---|---|---|
| [Biome](https://github.com/biomejs/biome) | 2.6.9 | MIT OR Apache-2.0 | 平台原生二进制 | 非常活跃 | Node >=14.21.3 | 采用 |
| [ESLint](https://github.com/eslint/eslint) | 10.15.0 | MIT | 约 22 个直接依赖 | 非常活跃 | Node ^20.19、^22.13 或 >=24 | 当前 Node 22.11 不兼容 |
| [Oxlint](https://github.com/oxc-project/oxc) | 1.95.0 | MIT | 平台原生二进制 | 非常活跃 | Node ^20.19 或 >=22.12 | 当前 Node 22.11 不兼容 |
| [Standard](https://github.com/standard/standard) | 17.1.2 | MIT | 9 个直接依赖，基于 ESLint 8 | 最近提交较少 | Node >=16 | 依赖较重且维护活跃度较低 |

## 决策

选择 **Biome 2.6.9**，仅使用 linter，不启用 formatter。

理由：

- 许可证 MIT/Apache-2.0，与当前项目兼容。
- 不引入完整的 JavaScript 依赖树，仅安装当前平台二进制。
- 当前 Node.js 版本满足要求。
- 零配置即可执行 `biome lint src test`。
- 官方仓库持续活跃，适合小型项目的最小 lint 流程。

风险与约束：

- 原生二进制体积明显大于单个 JavaScript 文件。
- 项目当前只需要 lint，因此不启用 Biome 的格式化功能。
- 后续若需要复杂 ESLint 插件生态，应重新评估 ESLint。