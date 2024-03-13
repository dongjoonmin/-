// 마우스 우클릭 차단
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 개발자 도구 감지
function detectDevTool(allow) {
    if (isNaN(+allow)) allow = 100;
    var start = +new Date();
    var end = +new Date();
    if (isNaN(start) || isNaN(end) || end - start > allow) {
        alert("DEVTOOLS detected. All operations will be terminated.");
        // 여기서 추가 작업을 수행하거나 종료할 수 있습니다.
    }
}

function setupDevToolDetection() {
    if (window.attachEvent) {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            detectDevTool();
        } else {
            window.attachEvent('onresize', detectDevTool);
            window.attachEvent('onmousemove', detectDevTool);
            window.attachEvent('onfocus', detectDevTool);
            window.attachEvent('onblur', detectDevTool);
        }
    } else {
        window.addEventListener('load', detectDevTool);
        window.addEventListener('resize', detectDevTool);
        window.addEventListener('mousemove', detectDevTool);
        window.addEventListener('focus', detectDevTool);
        window.addEventListener('blur', detectDevTool);
    }
}

setupDevToolDetection();


// 이미지 클릭 차단
document.querySelectorAll('.image img').forEach(function(image) {
    image.addEventListener('click', function(event) {
        event.preventDefault(); // 클릭 이벤트의 기본 동작 방지
        event.stopPropagation(); // 이벤트 버블링 중지
        console.log('이미지가 클릭되었습니다.');
    });
});
