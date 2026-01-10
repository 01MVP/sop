# 周周黑客松 SOP 文档站点

这是 **周周黑客松** SOP 文档站点的源码仓库，线上地址：
- https://sop.01mvp.com

AI PPT 的地址在
- https://hackppt.01mvp.com

可以让 AI 模型基于本仓库的 ai-ppt/index.html 快速修改得到活动的 PPT


## 快速开始
- 安装依赖：`bun install`
- 启动开发：`bun run docs:dev`
- 构建站点：`bun run docs:build`
- 预览构建：`bun run docs:preview`

## 项目结构
- `docs/`：文档内容页面。
- `docs/manual/`：活动组织者手册。
- `docs/roles/`：志愿者岗位角色说明。
- `docs/config.mts`：站点配置文件。

## 贡献方式
- 修改范围保持聚焦，只更新你涉及的页面。
- 链接优先使用站点根路径，如 `/organizer/host-sop`。

## 强烈建议使用 AI 编辑工具
为提升修改效率与一致性，**强烈建议**使用 **Cursor / Trae / Claude Code** 等 AI 编辑工具进行文档或导航调整，可显著减少返工与沟通成本。
