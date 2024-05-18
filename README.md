# AppCanWork

移动终端开发技术课程

这个项目是为北京联合大学特殊教育学院的移动终端开发技术课程设计的期末作业，旨在通过实际应用开发，加深对移动应用开发技术的理解。

## 项目背景

随着人工智能技术的快速发展，各种 AI 大模型如 GPT、BERT 和 AlphaFold 等在多个领域显示出了巨大的潜力和价值。这个项目旨在通过一个实用的新闻应用，让用户能够方便地获取关于这些 AI 大模型的最新进展和新闻。

## 功能特点

- **实时新闻更新**：聚合多个新闻源，提供最新的关于 AI 大模型的新闻。
- **AI 模型简介和详情**：展示各类 AI 模型的简介列表，用户点击后可以查看该模型的详细介绍和相关新闻。
- **对话交互**：用户可以与内置的 AI 模型进行交互，提问和获取信息。
- **个人中心**：用户可以查看和编辑个人信息，管理收藏的新闻。
- **天气情况展示**：在首页展示当前天气状况，提供温度、湿度等信息。

## 技术栈

- **前端技术**：HTML5, CSS3, JavaScript
- **移动端框架**：Appcan
- **后端技术**：Node.js + Express
- **数据库**：MySql5.7
- **外部 API**：
  - **天气信息**：暂时空

## 项目结构说明

### 一级页面

1. **首页 (Home Page)**
   - 显示最新的 AI 大模型新闻和厦门市的天气状况。
   - **功能组件**：
     - **图片滑块**：展示热门新闻的图片和标题。
     - **九宫格**：提供新闻分类和其他功能的快速入口。
     - **底部选项卡**：包括首页、对话、个人中心等导航选项。
   - 页面布局符合移动应用开发的规范，逻辑清晰。

2. **对话 (Chat Page)**
   - 用户可以与 AI 模型进行交互，提问和获取信息。
   - 支持用户通过打电话插件直接拨打电话，联系服务支持。
   - 采用合理的布局和设计，符合 App 开发规范。

3. **个人 (Profile Page)**
   - 展示用户个人信息，包括用户名、头像、收藏的新闻等。
   - 提供编辑个人信息的功能。
   - 利用本地存储技术维护用户的登录状态和个人信息。
   - 页面间导航逻辑设计准确，用户体验良好。

### 二级页面

1. **AI 模型分类新闻 (AI Model News Category Page)**
   - 展示各类 AI 模型的简介列表。
   - 用户点击某个模型可以查看该模型的详细介绍和相关新闻。
   - 页面布局和功能设计符合移动应用开发的规范。

2. **收藏列表 (Favorites Page)**
   - 展示用户收藏的新闻列表。
   - 支持用户通过点击管理收藏的新闻。
   - 实现简洁且逻辑清晰的用户界面，方便用户操作。

3. **天气状况 (Weather Page)**
   - 展示详细的厦门市天气状况，包括温度、湿度、风速等。
   - 利用天气 API 提供准确的天气数据。
   - 页面设计清晰，易于用户获取所需信息。

### 三级页面

1. **AI 模型详情 (AI Model Detail Page)**
   - 展示 AI 模型的详细介绍，包括模型功能、应用、相关新闻和官方电话等信息.
   - 用户可以通过页面提供的电话功能拨打官方电话，获取更多帮助。
   - 包含添加评论功能，用户可以对模型或新闻进行评论。

2. **个人信息编辑 (Edit Profile Page)**
   - 允许用户编辑个人信息，如用户名、头像、密码等.
   - 利用本地存储技术来保存用户编辑后的信息，确保多页面间登录状态的一致性。
   - 界面友好，操作逻辑符合 App 开发规范。

## 安装与运行

以下是如何设置和运行 AI Model News Explorer 的步骤：

### 克隆仓库

首先，克隆这个 GitHub 仓库到本地：

```bash
git clone https://github.com/yourusername/yourprojectname.git
cd yourprojectname
```

### 配置环境

暂时空

### 运行应用

暂时空

## 期末作业说明

这个项目作为北京联合大学特殊教育学院移动终端开发技术课程的期末作业，目的是通过开发一个完整的移动应用，深入理解和实践以下几个方面：

- **前端页面设计**：利用 HTML、CSS 和 JavaScript 实现响应式页面设计。
- **用户交互实现**：通过 JavaScript 和移动端框架处理用户输入，实现页面间的交互。
- **数据处理和展示**：聚合和展示来自不同源的新闻数据，以及实时天气信息。
- **应用逻辑开发**：开发后端服务（如果需要），处理业务逻辑和数据库交互。
- **实际应用场景**：通过实际的应用场景，加深对移动应用开发的整体流程和细节的理解。

## 贡献

这是一个开放的课程项目，欢迎同学们提供反馈和建议，以及贡献代码来一起改进这个项目。

## 许可证

该项目采用 [GNU General Public License v3.0](./LICENSE)。

## 联系方式

如果你有任何问题或建议，请通过以下方式联系：

- **Email**: yueWork2002@outlook.com
