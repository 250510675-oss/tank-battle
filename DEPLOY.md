# 部署指南

## 📝 手动创建GitHub仓库步骤

由于API权限限制，您需要手动在GitHub上创建仓库：

### 1. 访问GitHub
打开浏览器访问: https://github.com/login

### 2. 登录账户
使用您的GitHub账户登录（用户名: 250510675-oss）

### 3. 创建新仓库
1. 点击右上角的 "+" 按钮
2. 选择 "New repository"
3. 输入仓库名称: `tank-battle`
4. 选择 "Public"（公开仓库）
5. 勾选 "Add a README file"（可选）
6. 点击 "Create repository"

### 4. 推送代码到GitHub
在终端中运行以下命令：

```bash
# 添加SSH远程仓库地址
git remote add origin git@github.com:250510675-oss/tank-battle.git

# 推送到GitHub
git push -u origin main
```

### 5. 验证部署
访问: https://github.com/250510675-oss/tank-battle

## 🌐 在线游玩

创建完成后，您可以将游戏部署到以下平台：

### Vercel (推荐)
1. 访问 https://vercel.com
2. 连接您的GitHub账户
3. 导入 `tank-battle` 仓库
4. 点击 "Deploy"

### Netlify
1. 访问 https://netlify.com
2. 拖拽 `index.html` 文件到上传区域
3. 等待部署完成

### GitHub Pages
1. 在GitHub仓库设置中
2. 找到 "Pages" 选项
3. 选择 `main` 分支和 `/ (root)` 文件夹
4. 点击 "Save"
5. 访问 `https://250510675-oss.github.io/tank-battle/`

## 🎮 游戏特色功能

- **流畅的游戏体验**：60FPS流畅动画
- **智能AI**：敌方坦克具有智能移动和射击行为
- **视觉效果**：炫酷的爆炸特效和渐变背景
- **响应式设计**：完美适配桌面和移动设备
- **触摸控制**：支持移动设备滑动操作

## 📱 移动端支持

游戏完全支持移动设备：
- ✅ 触摸屏控制
- ✅ 滑动移动坦克
- ✅ 点击屏幕射击
- ✅ 自适应屏幕尺寸

---

祝您游戏愉快！🎮