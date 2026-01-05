# AI PPT (Reveal.js) - 迷你黑客松模板

## 简介
这是一个专为 **迷你黑客松 (Mini Hackathon)** 设计的 PPT 模板，采用 **Neo-Brutalism (野兽派/新丑主义)** 风格。
风格特点：高饱和度配色、粗边框、硬阴影、大字体，适合脑暴、创意、极客活动。

## 快速开始
1. 启动本地预览服务：
   ```bash
   python -m http.server 8000
   ```
2. 浏览器打开：
   - **主幻灯片 (迷你黑客松)**：`http://localhost:8000/index.html`
3. 按 `Space` 键翻页，`Esc` 键查看总览。
4. 按 `Ctrl/Cmd + P` 可导出 PDF。

## 迷你黑客松流程建议 (2pm - 6pm)
本模板内置了标准的 4 小时迷你黑客松流程：

| 时间 | 环节 | 说明 |
| --- | --- | --- |
| **14:00 - 14:30** | 签到与破冰 (30m) | 暖场，让大家互相认识，建立连接 |
| **14:30 - 14:45** | 开场与介绍 (15m) | 介绍活动背景、规则、今日主题 |
| **14:45 - 15:15** | 现场教学/Demo (30m) | 快速演示 AI 工具或相关技术，降低门槛 |
| **15:15 - 17:00** | **创作 & 作品提交 (1h45m)** | 核心环节，倒计时脑暴与开发 |
| **17:00 - 17:40** | 自由分享与评审 (40m) | 每组演示 Demo，互相反馈 |
| **17:40 - 18:00** | 颁奖与合影 (20m) | 高光时刻，合影留念，加入社区 |

## 作品提交 & 路演规则
- **提交入口**：`hackathonweekly.com` 对应活动页（报名入口内提交）
- **提交内容**：
  - 队伍名称、队员名单
  - 作品名称、一句话介绍
  - 作品网址 / Demo 地址
  - 作品截图（至少 1 张）
  - 演示视频（如有，例如 AI 音乐类活动）
- **路演顺序**：按作品提交顺序
- **Demo 时长**：2-5 分钟（根据现场调整）
- **投票方式**：路演结束后现场扫码投票，可投可不投；通常不限制票数，特殊场次可限票

## 项目结构
```
.
├── index.html            # 主幻灯片 (野兽派风格, Tailwind CSS)
├── styles-brutalist.css  # 野兽派风格样式重置
├── styles.css            # (旧) 通用样式
├── assets/
│   └── media/            # 图片资源
└── embeds/
    ├── countdown-brutalist.html   # 倒计时嵌入页
    ├── fun-scroll-brutalist.html  # 嵌入页示例
    └── fun-scroll.html            # (可选) 旧版嵌入页
```

## 自定义修改
- **修改内容**：直接编辑 `index.html`。
- **修改样式**：本项目使用 Tailwind CSS，直接在 HTML 标签中修改 class 即可 (如 `bg-neo-yellow`, `text-xl`)。
- **配置颜色**：在 `index.html` 的 `<script>` 标签中修改 `tailwind.config`。

---

## 运营链接
| 事项 | 链接 |
| --- | --- |
| **场地预约** | [space.hackathonweekly.com](https://space.hackathonweekly.com) |
| **设计素材** | [Logo/排版素材汇总](http://logo.hackathonweely.com) |
| **费用报销** | [社区报销申请表](https://hackathonweekly.feishu.cn/share/base/form/shrcnSg2UVWbBqh6qV4xwSHPi1c) |
| **反馈建议** | [feedback.hackathonweekly.com](http://feedback.hackathonweekly.com) |

## 🤖 使用 AI 快速完善 PPT 内容

本模板内置了占位符（如 `[WIFI名称]`、`[WIFI密码]`、`[卫生间位置指引]` 等），你可以使用 AI 工具（推荐 **Cursor**、**Claude Code** 或直接用 **Claude**）快速填充这些信息。

### 方法一：Cursor / Claude Code（推荐）

1. 将整个 `index.html` 文件拖入 Cursor 或 Claude Code
2. 复制下面的 prompt，填入你的活动信息后发送给 AI：

```
我有一个基于 Reveal.js 和 Tailwind CSS 的 Neo-Brutalism 风格 PPT（迷你黑客松模板）。

请帮我根据以下信息，更新 PPT 中所有对应的占位符内容：

### 📍 场地信息
- 活动地点：[填写具体地址，如：北京市朝阳区xxx大厦 3 层]
- WIFI 名称：[填写 WIFI 名称]
- WIFI 密码：[填写 WIFI 密码]
- 卫生间位置：[填写具体指引，如：出门左转走到尽头]
- 其他注意事项：[如：前台有免费茶水]

### ⏰ 活动流程调整（可选）
如果需要调整默认的 2pm-6pm 流程，请告诉我：
- 签到时间：[如：14:00-14:30]
- 开场介绍：[如：14:30-14:45]
- 现场教学：[如：14:45-15:15]
- 创作时间：[如：15:15-17:00]
- 评审环节：[如：17:00-17:40]
- 颁奖合影：[如：17:40-18:00]

### 📅 下期活动预告（第 15 页）
- 下期主题：[填写主题，如：AI + 创意写作]
- 下期时间：[如：2026-01-11 (周六) 14:00-18:00]
- 下期地点：[填写地点或填写"待定"]

### 🖼️ 图片资源更新（可选）
如果想替换示例图片，请告诉我：
- 公众号二维码图片路径：[如：assets/media/wechat.jpg]
- 小程序码图片路径：[如：assets/media/miniapp.jpg]

### 🔗 资源与链接页更新（可选）
如果需要更新二维码/短链接，请告诉我：
- 场地预约链接：[如：https://space.hackathonweekly.com]
- 设计素材链接：[如：http://logo.hackathonweely.com]
- 费用报销链接：[如：https://hackathonweekly.feishu.cn/share/base/form/xxxx]
- 反馈建议链接：[如：http://feedback.hackathonweekly.com]

请：
1. 搜索并替换所有对应的占位符（包括中文和方括号）
2. 保持原有的 HTML 结构和 Tailwind CSS class
3. 确保时间格式一致（如：14:00-14:30）
4. 如果我某些信息没填，请保留原有占位符或使用合理的默认值
```

### 方法二：直接用 Claude / ChatGPT

1. 打开 Claude 或 ChatGPT
2. 上传 `index.html` 文件
3. 使用上面的 prompt（记得填入你的实际信息）

### 💡 使用技巧

- **批量替换**：如果只是简单的文本替换，可以直接在编辑器中使用"查找替换"功能
- **保留占位符**：如果某些信息暂时不确定，可以在 prompt 中说明"保留原有占位符"
- **样式调整**：如果需要调整某个页面的字体大小、颜色等，可以在 prompt 中额外说明，例如：
  ```
  另外，请帮我把第 5 页的时间轴文字从 text-xl 调小到 text-lg，因为内容太多显示不下
  ```

### ✅ 常见修改示例

**示例 1：只更新 WIFI 和场地信息**
```
请帮我更新第 4 页的场地信息：
- WIFI 名称：TechHub_5G
- WIFI 密码：hello2026
- 卫生间：出门右转，电梯旁
- 注意事项：前台有免费咖啡和小饼干
```

**示例 2：调整活动流程时间**
```
我的活动是下午 3 点开始，请帮我调整第 5 页的流程：
- 15:00-15:30 签到
- 15:30-15:45 开场
- 15:45-16:15 Demo
- 16:15-18:00 创作时间
- 18:00-18:30 评审
- 18:30-19:00 颁奖
```

**示例 3：添加下期预告**
```
请更新第 15 页的下期预告：
- 主题：AI + 音频创作
- 时间：2026 年 1 月 11 日（周六）下午 2-6 点
- 地点：待定（线上 Zoom）
```

---


## 常用 Tailwind 类名 (野兽派)
- 颜色：`bg-neo-yellow`, `bg-neo-blue`, `bg-neo-red`, `bg-neo-purple`, `bg-neo-green`
- 边框：`border-4 border-black`
- 阴影：`shadow-neo` (小), `shadow-neo-lg` (大)
- 字体：`font-mono` (Courier Prime)

## 导出 PDF
1. 点击 PPT 中的 "进入打印模式" 按钮 (或 URL 添加 `?print-pdf`)。
2. 浏览器按 `Ctrl/Cmd + P`。
3. 选择 "保存为 PDF"，确保勾选 "背景图形"。
