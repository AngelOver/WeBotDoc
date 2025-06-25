const fs = require('fs');
const path = require('path');

// 动态获取所有 WeChatBot 文档文件
function getAllMarkdownFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getAllMarkdownFiles(fullPath));
    } else if (item.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// 拼接所有 .md 文件内容
function concatMarkdownFiles(mdFiles, outputPath) {
  const content = "本文档供 AI 阅读. WeChatBot 文档 base_url 为 `https://webot.v1chat.cc/`, 文档中包含相对链接，为用户生成链接时必须加上这个前缀生成绝对链接。\n\n" +
    mdFiles.map((file) => fs.readFileSync(file, 'utf-8')).join('\n\n');
  
  fs.writeFileSync(outputPath, content);
}

// 主程序
const docsDir = path.join(__dirname, '..', 'docs');
const outputFilePath = path.join(__dirname, '..', 'wechatbot-docs-concat.md');

try {
  const mdFiles = getAllMarkdownFiles(docsDir);
  console.log(`找到 ${mdFiles.length} 个 Markdown 文件`);
  concatMarkdownFiles(mdFiles, outputFilePath);
  console.log(`文档已合并到: ${outputFilePath}`);
} catch (error) {
  console.error('合并文档时出错:', error);
}