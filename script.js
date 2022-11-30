function focusImg(imgs) {
    var expandImg = document.getElementById("focusedimg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}

window.addEventListener('load',function(){
    document.getElementById("cover").style.visibility = "visible";
},false)