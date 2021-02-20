const plink_container = document.querySelector(".main-projlink");

const ELEMENT_PLINK_CN = "main-element-projlink";

function checkProjLink(event) {
    const a = document.createElement("a");
    const thisli = event.target;
    a.href = thisli.tagName;
    a.click();
}

function setProj(ptitle, plink) {
    const li = document.createElement("li");

    li.title = ptitle;
    li.tagName = plink;
    li.classList.add(ELEMENT_PLINK_CN);
    linkBtn.addEventListener("click", checkProjLink);
    
    plink_container.appendChild(li);
}

function init() {
    setProj("papago", "https://papago.naver.com/");
    setProj("css_flexbox", "https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B0%9C%EB%85%90");
    setProj("test3", "link3");
    setProj("test4", "link4");
}
init();