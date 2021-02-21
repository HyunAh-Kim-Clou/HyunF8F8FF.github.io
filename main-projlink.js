const plink_container = document.querySelector(".main-projlink");

const ELEMENT_LI_CN = "main-element-li";
const ELEMENT_A_CN = "main-element-link";

let projs = [];

function addProj(ptitle, plink) {
    const li = document.createElement("li");
    const alink = document.createElement("a");

    alink.text = ptitle;
    alink.href = plink;
    alink.classList.add(ELEMENT_A_CN);
    li.classList.add(ELEMENT_LI_CN);
        
    li.appendChild(alink);
    plink_container.appendChild(li);
}

function loadProjs() {
    projs = proj_list;
    projs.forEach(element => 
        addProj(element.name, element.plink));
}

function init() {
    loadProjs();
}
init();