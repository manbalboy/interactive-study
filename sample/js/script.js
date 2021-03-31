let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.03;
let scrollTop = 0;
let parallax_0, parallax_1, parallax_2, parallax_3, parallax_4, parallax_6, parallax_7, parallax_5;
let progressBar;
let _documentHum;
let _windowHNum;
window.onload = function () {
    progressBar = document.querySelector('.progressBar');

    parallax_0 = document.querySelector('#parallax_0');
    parallax_1 = document.querySelector('#parallax_1');
    parallax_2 = document.querySelector('#parallax_2');
    parallax_3 = document.querySelector('#parallax_3');
    parallax_4 = document.querySelector('#parallax_4');
    parallax_5 = document.querySelector('#parallax_5');
    parallax_6 = document.querySelector('#parallax_6');
    parallax_7 = document.querySelector('#parallax_7');

    window.addEventListener('resize', stageResize, false);
    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('scroll', scrollFunc, false);

    stageResize();
    loop();
};

function scrollFunc(e) {
    var scrollTop = document.documentElement.scrollTop;
    let per = Math.ceil((scrollTop / (_documentHum - _windowHNum)) * 100);
    progressBar.style.width = per + '%';
    console.log(parallax_0, parallax_1, parallax_2, parallax_3, parallax_4, parallax_6, parallax_7, parallax_5);
    parallax_0.style.transform = `translate3d(0px, ${scrollTop * 0.03}px, 0px)`;
    parallax_1.style.transform = `translate3d(0px, ${-scrollTop * 0.03}px, 0px)`;
    parallax_2.style.transform = `translate3d(0px, ${-scrollTop * 0.12}px, 0px)`;
    parallax_3.style.transform = `translate3d(0px, ${-scrollTop * 0.16}px, 0px)`;
    // parallax_4.style.transform = `translate3d(0px, ${scrollTop * 0.22}px, 0px)`;
    // parallax_5.style.transform = `translate3d(0px, ${scrollTop * 0.25}px, 0px)`;
    //window.outerHeight <- 브라우저 전체 높이(검색창 포함)
    //window.innerHeight <- 브라우저 안쪽 높이(실제 컨텐츠 영역)

    //console.log(per);
}

function stageResize() {
    _documentHum = document.body.offsetHeight;
    _windowHNum = window.outerHeight;
}

function loop() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    parallax_4.style.transform = `translate3d(${mx / 140}px, ${-scrollTop * 0.22}px, 0px)`;
    parallax_5.style.transform = `scale(1.1) translate(${mx / 140}px, ${-scrollTop * 0.25}px)`;
    parallax_6.style.transform = `scale(1.2) translate(${-mx / 20}px, ${-my / 20}px)`;

    window.requestAnimationFrame(loop);
}

function mouseMove(e) {
    x = e.clientX - window.innerWidth / 2;
    y = e.clientY - window.innerHeight / 2;
}
