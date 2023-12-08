

function menuAnimation() {
    let leaf = document.getElementById("menuLeaf");
    let shade = document.getElementById("shade");
    let counter = document.getElementById("counter");
    if (counter.classList.contains("closed")) {
        leaf.style.transition = "transform 1s ease-in-out 1s";
        leaf.style.transform = "rotate(120deg)";
        shade.style.display = "block";
        counter.classList.remove("closed");
        counter.classList.add("opened");
    }
    else {
        leaf.style.transition = "transform 1s ease-in-out 1s";
        leaf.style.transform = "rotate(-120deg)";
        shade.style.display = "none";
        counter.classList.remove("opened");
        counter.classList.add("closed");
    }
}