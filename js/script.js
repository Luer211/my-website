// 获取菜单按钮和菜单容器元素
const menuToggle = document.getElementById('menu-toggle');
const menuContainer = document.getElementById('menu-container');

// 点击按钮显示/隐藏菜单容器，并切换 active 状态
if (menuToggle) { // 确保菜单按钮存在
    menuToggle.addEventListener('click', function () {
        // 切换菜单显示状态
        if (menuContainer.style.display === 'block') {
            menuContainer.style.display = 'none'; // 隐藏菜单
            menuToggle.classList.remove('active'); // 移除 active 类
        } else {
            menuContainer.style.display = 'block'; // 显示菜单
            menuToggle.classList.add('active'); // 添加 active 类
        }
    });
}


const dynamicText = document.getElementById('dynamic-text');
const originalText = '小卢的梦工厂'; // 原始文本内容（去掉了...）
const dotCount = 3; // 点的总数量
let currentDots = 0; // 当前点数
let interval; // 定义定时器

function updateText() {
    // 生成当前点数的字符串
    const dots = '.'.repeat(currentDots);
    dynamicText.textContent = `${originalText}${dots}`; // 更新文本内容

    // 更新点数
    currentDots = (currentDots + 1) % (dotCount + 1); // 加 1，最多到 3
}

// 开始定时器，间隔 500ms 更新一次文本
interval = setInterval(updateText, 500);