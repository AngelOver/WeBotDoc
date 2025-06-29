# WeChatBot文档

本项目是 [WeChatBot](https://github.com/iwyxdxl/WeChatBot_WXAUTO_SE) 的文档项目, 用于文档的编写和发布.

WeChatBot是一个智能微信聊天机器人，支持AI大模型接入，具有自动回复、图片识别、情绪表达等强大功能。

## 官网访问

- 文档网站：https://webot.v1chat.cc
- 项目源码：https://github.com/iwyxdxl/WeChatBot_WXAUTO_SE

## Contribution

如果只做简单的文本修改, 可以只修改对应的 .md 文件并 PR, 如果修改比较繁琐, 请参考以下步骤:

1. 阅读 [VuePress 文档](https://v2.vuepress.vuejs.org/zh/) 和 [Plume 主题文档](https://theme-plume.vuejs.press/) 了解 VuePress 的使用方法.

2. 使用 1. 中学到的知识对文档进行修改.

3. 预览修改后的文档

    1. 安装 node.js (推荐 node.js >= 18.19.0)

    2. 更新 npm 并安装模块依赖

        ```shell
        npm install -g npm@latest
        ```

    3. 本地预览

    **重启终端**, 切换到本项目目录下, 执行:

    ```shell
    npm install
    npm run docs:dev
    ```

4. 确认无误后提交 PR.
