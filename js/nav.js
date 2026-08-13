// ========== 导航栏高亮当前页面 ==========
// 根据当前 URL 给对应的导航链接加 .active
(function () {
    var links = document.querySelectorAll('.nav-links a');
    var currentPath = window.location.pathname;

    for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('href');
        // 如果当前 URL 包含链接的 href 路径，就是当前页
        if (href && currentPath.indexOf(href.replace(/^\.\.\//, '')) !== -1) {
            links[i].classList.add('active');
        }
        // 兜底：精确匹配文件名
        if (href) {
            var linkFile = href.split('/').pop();
            var currentFile = currentPath.split('/').pop();
            if (linkFile === currentFile) {
                links[i].classList.add('active');
            }
        }
    }
})();
