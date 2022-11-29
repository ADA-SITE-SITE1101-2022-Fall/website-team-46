function focusImg(imgs) {
    var expandImg = document.getElementById("focusedimg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}

$(window).on('load', function() {
    $("#cover").hide();
});
