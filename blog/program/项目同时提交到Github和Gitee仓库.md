---
title: 项目同时提交到Github和Gitee仓库
date: '2023-04-12'
authors: liuzw
url: 'https://github.com/liuzw-cyy'
tags:
  - Github
slug: /pages/d9fe48/
---
本篇文章讲解一个项目如何同时同步到Github和Gitee仓库中。

<!-- truncate -->
[Github](https://github.com/) 是全球最大、使用人数最多的开源社区，但是国内使用时常出现网络错误导致连接不上的问题，极大地影响使用体验。为了解决这个问题，一个优秀的国产代码托管平台 [Gitee](https://gitee.com/) 应用而生，但是 [Gitee](https://gitee.com/) 并没有 [Github](https://github.com/) 广为人知，如果我们想自己的代码既能放到最知名的 [Github](https://github.com/)上，同时也可以兼容访问和下载速度，那应该怎么做呢？

我们可以同时将代码提交到 [Github](https://github.com/) 和 [Gitee](https://gitee.com/) 上，那么该如何去做呢？接下来我将通过一个实例进行讲解。

#### 准备工作
需要先注册 [Github](https://github.com/) 和 [Gitee](https://gitee.com/) 这两个网站，注册好以后将 `SSH keys` 同时添加到这两个网站。

#### 正文
打开项目中的 .git 隐藏文件夹，将 config 文件里相应的配置改为如下所示，即可通过一次 `git push` 操作同时更新两个仓库里的文件。

:::tip
Vscode 可以通过 `Files：Exclude` 设置，Mac在文件夹中按 `Cmd+Shift+.` 即可看到掩藏文件夹。
:::

```bash
[remote "origin"]
  # gitee
	url = https://gitee.com/liuzw2020/zstu-master.git //gitee仓库地址

  # github
  url = https://github.com/liuzw-cyy/ZstuMaster.git //github仓库地址

	fetch = +refs/heads/*:refs/remotes/origin/*

[branch "master"]
	remote = origin
	merge = refs/heads/master
```

如果需要使用 `git push` 分别管理两个仓库里的内容，可以在 config 文件里做如下设置，使用 `git push` 命令时时指定远程仓库的名字即可完成更新。

```bash
[remote "gitee"]
  # gitee
	url = https://gitee.com/liuzw2020/zstu-master.git //gitee仓库地址
	fetch = +refs/heads/*:refs/remotes/gitee/*

[remote "github"]
  # github
  url = https://github.com/liuzw-cyy/ZstuMaster.git //github仓库地址

	fetch = +refs/heads/*:refs/remotes/github/*

[branch "master"]
	remote = origin
	merge = refs/heads/master
```
