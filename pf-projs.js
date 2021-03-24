const pfprojlist = document.querySelector(".pf-projlist");

const ELEMENT_LI_CN = "pf-proj-li";

let myprojs = [];

function addProj(title, slink) {
    const li = document.createElement("li");
    const alinker = document.createElement("a");

    alinker.text = title;
    alinker.href = slink;

    alinker.classList.add(ELEMENT_A_CN);
    li.classList.add(ELEMENT_LI_CN);

    li.appendChild(alinker);
    pfprojlist.appendChild(li);
}

function loadProjs() {
    myprojs = pfresources.pfprojs;
    myprojs.forEach(element => 
        addProj(element.name, element.connect)
    );
}

function init() {
    loadProjs();
}
init();