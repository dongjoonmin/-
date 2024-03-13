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


// 개발자 도구 열기/닫기 이벤트를 감지하여 처리하는 함수
window.addEventListener('devtoolschange', event => {
    // isOpen 속성을 이용하여 개발자 도구가 열려있는지 여부를 확인합니다.
    if (event.detail.isOpen == true) {
        // 개발자 도구가 열려있을 때 페이지를 다른 URL로 리디렉션합니다.
        document.location.href = "https://fitamin.kr"; // 리디렉션할 URL을 여기에 입력하세요.
    }
});

// 페이지 로드 시 개발자 도구 상태를 확인하고 처리하는 함수
function MovePage() {
    // isOpen 속성을 이용하여 개발자 도구가 열려있는지 여부를 확인합니다.
    if (window.devtools.isOpen == true) {
        // 개발자 도구가 열려있을 때 페이지를 다른 URL로 리디렉션합니다.
        document.location.href = "https://fitamin.kr"; // 리디렉션할 URL을 여기에 입력하세요.
    }
}

// MovePage 함수를 호출하여 페이지 로드 시 처리합니다.
MovePage();
