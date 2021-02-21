const plink_container = document.querySelector(".main-projlink");

const ELEMENT_PLINK_CN = "main-element-projlink";

function setProj(ptitle, plink) {
    const li = document.createElement("li");
    const alink = document.createElement("a");

    alink.text = ptitle;
    alink.href = plink;
    li.classList.add(ELEMENT_PLINK_CN);
        
    li.appendChild(alink);
    plink_container.appendChild(li);
}

function init() {
    setProj("papago", "https://papago.naver.com/");
    setProj("css_flexbox", "https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B0%9C%EB%85%90");
    setProj("test3", "link3");
    setProj("test4", "link4");
}
init();