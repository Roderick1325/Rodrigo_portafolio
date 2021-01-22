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