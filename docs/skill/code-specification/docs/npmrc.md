---
id: npmrc
slug: /npmrc
title: npmrc
authors: kuizuo
keywords:
  - code-specification
  - npmrc
date: 2023-04-04 12:14:40
permalink: /pages/5f5bb5/
categories:
  - skill
  - code-specification
tags:
  - 笔记
---

对于 pnpm 项目，通常会有一个 `.npmrc` 文件，用于配置npm的一些参数，比如使用pnpm的严格模式等，其内容如下。

```properties title='.npmrc'
shamefully-hoist=true
strict-peer-dependencies=false
shell-emulator=true
```

此外，配置仓库镜像源，node版本等等。更多配置可看 [.npmrc](https://pnpm.io/npmrc)。
