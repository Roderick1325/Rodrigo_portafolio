// Portafolio Item Filter
const filterContainer = document.querySelector(".portafolio-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length;

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active")
    })
}