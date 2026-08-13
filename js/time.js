// 在页脚添加当前时间（不影响任何功能）
document.addEventListener("DOMContentLoaded", function() {
    let footer = document.querySelector('footer');
    if (footer) {
        let timeTag = document.createElement('p');
        let now = new Date();
        timeTag.innerHTML = '🕐 当前时间：' + now.toLocaleString();
        timeTag.style.fontSize = '12px';
        timeTag.style.marginTop = '10px';
        footer.appendChild(timeTag);
    }
    console.log("✅ JS 已加载");
});

