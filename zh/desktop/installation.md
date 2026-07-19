# 桌面版/安装

此文档为 [Win12 桌面版](/zh/desktop/) 的安装指南。

## Windows

1. 从 [Releases 页面](https://github.com/win12-online/win12-desktop/releases/latest) 下载最新版的 Windows 安装程序（`.msi` 或 `setup.exe`）
2. 运行安装程序，并跟随指引进行安装

::: info
我们目前暂不提供 Windows 便携版。
:::

## MacOS

1. 从 [Releases 页面](https://github.com/win12-online/win12-desktop/releases/latest) 下载 `.dmg` 软件包
   - 如果您的处理器是 Apple Silicon，请下载 `aarch64.dmg`
   - 如果您的处理器是 Intel，请下载 `x64.dmg`
2. 运行 `.dmg` 软件包并进行安装

::: tip
若您运行本应用时遇到“已损坏”的错误信息，这是由于我们未对本应用进行签名导致的，您可以在终端中运行以下命令以解决此问题：

```shell
xattr -cr /Applications/Win12.app
```

来源：[Issue #22](https://github.com/win12-online/win12-desktop/issues/22)
:::

## Linux

### 使用 AppImage（通用）

1. 从 [Releases 页面](https://github.com/win12-online/win12-desktop/releases/latest) 下载 `.AppImage` 软件包
2. 在终端中，为 AppImage 赋予可执行权限：
   ```shell
   chmod +x Win12_x.x.x_amd64.AppImage
   ```
   （将 `Win12_x.x.x_amd64.AppImage` 替换为你下载的文件的实际位置）
3. 从图形界面或终端中运行该 AppImage 文件

### 使用 AUR（Archlinux）

您可以直接从 AUR 安装 [`win12-desktop-bin`](https://aur.archlinux.org/packages/win12-desktop-bin) 软件包（由 [@lingbopro](https://github.com/lingbopro) 维护）

::: code-group
```shell [paru]
paru -S win12-desktop-bin
```
```shell [yay]
yay -S win12-desktop-bin
```
:::

### 使用 deb 软件包（Debian/Ubuntu）

1. 从 [Releases 页面](https://github.com/win12-online/win12-desktop/releases/latest) 下载 `.deb` 软件包
2. 在终端中使用 `apt` 或 `dpkg` 安装软件包：
   ::: code-group
   ```shell [apt]
   sudo apt install ./Win12_x.x.x_amd64.deb
   ```
   ```shell [dpkg]
   sudo dpkg -i Win12_x.x.x_amd64.deb
   ```
   :::
   （将 `Win12_x.x.x_amd64.deb` 替换为你下载的文件的实际位置）

### 使用 rpm 软件包（Fedora/RedHat）

1. 从 [Releases 页面](https://github.com/win12-online/win12-desktop/releases/latest) 下载 `.rpm` 软件包
2. 在终端中使用 `dnf` / `yum` 或 `rpm` 安装软件包：
   ::: code-group
   ```shell [dnf]
   sudo dnf install Win12_x.x.x_amd64.rpm
   ```
   ```shell [yum]
   sudo yum install Win12_x.x.x_amd64.rpm
   ```
   ```shell [rpm]
   sudo rpm -ivh Win12_x.x.x_amd64.rpm
   ```
   :::
   （将 `Win12_x.x.x_amd64.rpm` 替换为你下载的文件的实际位置）
