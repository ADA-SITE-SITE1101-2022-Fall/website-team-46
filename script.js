function focusImg(imgs) {
    var expandImg = document.getElementById("focusedimg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}

window.onload(function(){
    document.getElementById("cover").style.visibility = "visible";
})