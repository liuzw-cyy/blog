---
id: stylelint
slug: /stylelint
title: stylelint
authors: kuizuo
keywords:
  - code-specification
  - stylelint
date: 2023-04-04 12:14:40
permalink: /pages/eadc47/
categories:
  - skill
  - code-specification
tags:
  - 笔记
---

stylelint 主要针对 css 样式进行格式化(包括css预处理器)，同时对一些属性拼写进行检查。

[Getting started | Stylelint](https://stylelint.io/user-guide/get-started)

配置文件示例：

```json title='.stylelintrc.json'
{
  "extends": ["stylelint-config-recommended","stylelint-config-standard"],
  "rules": {
    "indentation": 4
  }
}
```

## 配合 prettier

[prettier/stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier)