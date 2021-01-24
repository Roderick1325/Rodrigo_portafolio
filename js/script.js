// Preloader
window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})
// Portafolio Item Filter
const filterContainer = document.querySelector(".portafolio-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portafolioItems = document.querySelectorAll(".portafolio-item"),
    totalPortafolioItem = portafolioItems.length;


for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalPortafolioItem; k++) {
            if (filterValue === portafolioItems[k].getAttribute("data-category")) {
                portafolioItems[k].classList.remove("hide");
                portafolioItems[k].classList.add("show");
            }
            else {
                portafolioItems[k].classList.remove("show");
                portafolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                portafolioItems[k].classList.remove("hide");
                portafolioItems[k].classList.add("show");
            }
        }
    })
}

// Portafolio Lightbox
const lightbox = document.querySelector(".lightbox"),
    lightboxClose=lightbox.querySelector(".lightbox-close"),
    lightboxImg = lightbox.querySelector(".lightbox-img"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex=0;
for (let i=0; i < totalPortafolioItem; i++) {
    portafolioItems[i].addEventListener("click", function() {
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
}
function nextItem(){
    if(itemIndex === totalPortafolioItem-1){
        itemIndex=0;
    }
    else{
        itemIndex++
    }
    changeItem();
}
function prevItem(){
    if(itemIndex === 0){
        itemIndex= totalPortafolioItem-1;
    }
    else{
        itemIndex--;
    }
    changeItem();
}

function toggleLightbox(){
    lightbox.classList.toggle("open");
}
function changeItem(){
    imgSrc=portafolioItems[itemIndex].querySelector(".portafolio-img img").getAttribute("src");
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portafolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalPortafolioItem;
}
// close lightbox
lightbox.addEventListener("click", function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
})

// Aside Navbar
const nav=document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList=navList.length,
    allSection=document.querySelectorAll(".section"),
    totalSection=allSection.length;

for(let i=0; i<totalNavList; i++){
    const a=navList[i].querySelector("a");
    a.addEventListener("click", function(){
        //remove back section Class
        removeBackSectionClass();

        for(let j=0;j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                // add back section Class
                addBackSectionClass(j);
                
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function addBackSectionClass(num){
    allSection[num].classList.add("back-section");
}

function removeBackSectionClass(){
    for(let i=0; i<totalSection;i++){
        allSection[i].classList.remove("back-section");
    }
}

function showSection(element){
    for(let i=0; i<totalSection;i++){
        allSection[i].classList.remove("active");
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active")
}

function updateNav(element){
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target=element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex=this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
    addBackSectionClass(sectionIndex);
})

const navTogglerBtn=document.querySelector(".nav-toggler"),
    aside=document.querySelector(".aside");

navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection;i++){
        allSection[i].classList.toggle("open");
    }
}