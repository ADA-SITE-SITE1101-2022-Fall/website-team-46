function focusImg(imgs) {
    var expandImg = document.getElementById("focusedimg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
    alert(`clicked image ${imgs.alt}`)
}