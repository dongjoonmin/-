// 마우스 우클릭 차단
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


// 이미지 클릭 차단
document.querySelectorAll('.image img').forEach(function(image) {
    image.addEventListener('click', function(event) {
        event.preventDefault(); // 클릭 이벤트의 기본 동작 방지
        event.stopPropagation(); // 이벤트 버블링 중지
        console.log('이미지가 클릭되었습니다.');
    });
});

// 개발자 도구 감지
    ! function() {
        function detectDevTool(allow) {
            if (isNaN(+allow)) allow = 100;
            var start = +new Date();
            debugger;
            var end = +new Date();
            if (isNaN(start) || isNaN(end) || end - start > allow) {
                // 개발자 도구가 open 된것을 감지했을때 실행할 코드 삽입
                document.location.href = "https://www.tistory.com/"
            }
        }
        if (window.attachEvent) {
            if (document.readyState === "complete" || document.readyState === "interactive") {
                detectDevTool();
                window.attachEvent('onresize', detectDevTool);
                window.attachEvent('onmousemove', detectDevTool);
                window.attachEvent('onfocus', detectDevTool);
                window.attachEvent('onblur', detectDevTool);
            } else {
                setTimeout(argument.callee, 0);
            }
        } else {
            window.addEventListener('load', detectDevTool);
            window.addEventListener('resize', detectDevTool);
            window.addEventListener('mousemove', detectDevTool);
            window.addEventListener('focus', detectDevTool);
            window.addEventListener('blur', detectDevTool);
        }
    }(); 
