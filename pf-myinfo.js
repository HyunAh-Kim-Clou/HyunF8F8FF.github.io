const pfstate = document.querySelector(".pf-state");
const pfsns = document.querySelector(".pf-sns");
const pfinterest = document.querySelector(".pf-interest");

const ELEMENT_A_CN = "pf-a";
const SNS_LI_CN = "pf-sns-li";
const SNS_TITLE_CN = "pf-snstitle";

let snsinfo = [];
let interest = [];

function setMyState(title) {
    pfstate.textContent = title;
}

function createATag(slink) {
    const alinker = document.createElement("a");

    alinker.text = slink;
    alinker.href = slink;
    alinker.classList.add(ELEMENT_A_CN);

    return alinker;
}
function createSpanTag(slink) {
    const span = document.createElement("span");

    span.textContent = slink;
    span.style = "margin-left: 10px;";

    return span;
}

// 수정 필요
function addSns(logo, title, slink) {
    const li = document.createElement("li");
    const logoimg = document.createElement("img");
    const spanTitle = document.createElement("span");

    li.classList.add(SNS_LI_CN);
    logoimg.src = logo;
    logoimg.width = 50;
    spanTitle.textContent = title;
    spanTitle.classList.add(SNS_TITLE_CN);
    
    li.appendChild(logoimg);
    li.appendChild(spanTitle);
    if (slink.substring(0, 4) == "http") { // URL 링크이면
        li.appendChild(createATag(slink));
    } else {
        li.appendChild(createSpanTag(slink));
    }
    pfsns.appendChild(li);
}

function addInterest(title) {
    const div = document.createElement("div");

    div.textContent = title;

    pfinterest.appendChild(div);
}

function loadMyInfo() {
    setMyState(pfresources.mystate);

    snsinfo = pfresources.mysns;
    snsinfo.forEach(element => 
        addSns(element.logo, element.name, element.snslink)
    );

    interest = pfresources.myinterest;
    interest.forEach(element => 
        addInterest(element)
    );
}

function init() {
    loadMyInfo();
}
init();