

# AppCanWork

移动终端开发技术课程

这个项目是为北京联合大学特殊教育学院的移动终端开发技术课程设计的期末作业，旨在通过实际应用开发，加深对移动应用开发技术的理解。

## 项目背景

随着人工智能技术的快速发展，各种 AI 大模型如 GPT、BERT 和 AlphaFold 等在多个领域显示出了巨大的潜力和价值。这个项目旨在通过一个实用的新闻应用，让用户能够方便地获取关于这些 AI 大模型的最新进展和新闻。

## 主要功能

### 首页 (Home Page)

展示与AI相关的新闻头条和摘要，提供导航到“AI趋势”和“AI天气”页面的链接，并提供快速访问教程和个人信息设置的入口。

### 教程与指南 (Tutorials Page)

提供丰富的AI相关教程和指南，包括视频、文章以及实践指南，帮助用户学习和掌握AI技术。

### 个人页面 (Profile Page)

显示用户的个人信息和历史活动记录，提供“登录”和“注册”的选项，支持用户进行身份验证和信息更新。

### AI天气 (Weather Page)

使用API预测并展示厦门市的天气情况，包括温度、湿度、风速等信息，并提供未来几天的天气预测，帮助用户规划未来活动。

### 文章详情 (Article Detail Page)

展示选定的AI新闻或研究文章的完整内容，包括作者、发布时间等详细信息，添加评论功能，允许用户对文章进行评论，促进社区互动。

### 登录 (Login Page)

提供用户登录功能，支持用户名和密码输入，登录成功后用户可以访问更多个性化功能和设置。

### 拍照页 (Photo Page)

用户可以使用设备的摄像头拍照，并支持上传学习笔记或实践成果。

### 电话页 (Call Page)

用户可以拨打预设的客服电话进行咨询。包含登录验证功能，用户需登录才能拨打电话。

### 地图页 (Map Page)

用户可以获取并显示当前的地理位置。使用高德地图 API 提供精准的位置信息。

## 项目结构

```plaintext
AppCan
│
├── phone
│   ├── assets
│   ├── call
│   ├── css
│   ├── index
│   ├── js
│   ├── login
│   ├── map
│   ├── newsDetail
│   ├── personal
│   ├── photo
│   ├── tutorials
│   ├── weather
│   ├── call.html
│   ├── config.xml
│   ├── icon.png
│   ├── index.html
│   ├── login.html
│   ├── map.html
│   ├── newsDetail.html
│   ├── personal.html
│   ├── photo.html
│   ├── tutorials.html
│   ├── weather.html
```

## 安装与运行

### 开发准备

1. 安装AppCan IDE：请前往 [AppCan官网](http://newdocx.appcan.cn/IDE/download) 下载并安装最新版本的AppCan。
2. 安装Visual Studio Code（VSCode）：这部分可以省略具体步骤，直接前往VSCode官网进行下载和安装。

### 创建项目

1. 打开AppCan，选择创建项目，选择空模板并使用默认设置。
2. 使用VSCode打开项目所在文件夹，即可开始编辑代码。

### 使用Git进行版本控制

1. 本项目使用Git进行版本控制，所有代码均上传至GitHub仓库。
2. GitHub仓库地址：[https://github.com/Yueran-Wang/AppCanWork](https://github.com/Yueran-Wang/AppCanWork)。

## 贡献

这是一个开放的课程项目，欢迎同学们提供反馈和建议，以及贡献代码来一起改进这个项目。

## 许可证

该项目采用 [GNU General Public License v3.0](https://github.com/Yueran-Wang/AppCanWork/blob/main/LICENSE)。

## 联系方式

如果你有任何问题或建议，请通过以下方式联系：

- **Email**: [yueWork2002@outlook.com](mailto:yueWork2002@outlook.com)
