const shareBtn = document.querySelector("#share-btn");
const footer = document.querySelector("footer");
const mobileSharePreview = document.querySelector(".share-preview");
const desktopSharePreview = document.querySelector(".desktop-preview");


const sharePreview = (evt) =>{
    if(window.innerWidth >= 576){
        //desktop mode
        desktopSharePreview.style.display = "flex";
    }
    else{
        //mobile mode
        footer.style.display = "none";
        mobileSharePreview.style.display = "flex";
    }
}


shareBtn.addEventListener("click", sharePreview);