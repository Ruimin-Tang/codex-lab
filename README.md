# Codex Lab

这是一个用于测试 Codex 与 GitHub 协作流程的私有实验仓库。

## 目标

验证以下闭环：

1. 读取仓库与 Issue
2. 评估开源方案
3. 修改代码
4. 运行测试和构建
5. 修复 GitHub Actions
6. 创建 Pull Request
7. 处理 Review 评论

## 环境要求

- Node.js 20+
- npm

## 常用命令

```powershell
npm test
npm run build
npm start -- --name Codex
```

## 项目结构

```text
src/        源代码
test/       测试
docs/       开发说明与任务记录
.github/    GitHub Actions 工作流
```

## 初始功能

`greet(name)` 返回问候语；CLI 支持通过 `--name` 指定名字。