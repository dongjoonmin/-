// 마우스 우클릭 차단
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

let screenWidth = window.screen.width;

window.addEventListener('resize', function() {
    // 개발자 도구가 열리면 화면 너비가 변화됨
    if (window.screen.width < screenWidth) {
        window.location.href = 'https://www.google.com';
    }
});


// 이미지 클릭 차단
document.querySelectorAll('.image img').forEach(function(image) {
    image.addEventListener('click', function(event) {
        event.preventDefault(); // 클릭 이벤트의 기본 동작 방지
        event.stopPropagation(); // 이벤트 버블링 중지
        console.log('이미지가 클릭되었습니다.');
    });
});
