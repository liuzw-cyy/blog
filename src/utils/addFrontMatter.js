const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const readFileList = require('./readFileList');

function addFrontMatter(folderPath, PREFIX) {
  const files = readFileList(folderPath);
  files.forEach(file => {
    const fileContent = fs.readFileSync(file.filePath, { encoding: 'utf-8' });
    const { data, content } = matter(fileContent);

    // 当md文件中的frontmatter为空时，添加frontmatter
    if (Object.keys(data).length === 0) {
      // 获取文件创建时间
      const stat = fs.statSync(file.filePath);
      const dateStr = stat.birthtime.toISOString().slice(0, 10);

      // 添加 front matter
      data.title = data.title || file.name
      data.date = dateStr;
      data.author = 'liuzw';
      data.link = 'https://github.com/liuzw-cyy';
      data.tags = data.tags || ['未分类'];
      data.permalink = `${PREFIX + (Math.random() + Math.random()).toString(16).slice(2, 8)}/`;
      const newContent = matter.stringify(content, data);

      // 写回原文件
      fs.writeFileSync(file.filePath, newContent);
    } else {
      return;
    }
  });
}
    // 读取文件内容并解析 front matter
    // const filePath = path.join(folderPath, file);

module.exports = addFrontMatter;
