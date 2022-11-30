function focusImg(imgs) {
    var expandImg = document.getElementById("focusedimg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

document.addEventListener('DOMContentLoaded', () =>
  delay(100).then(() => {
    document.getElementById("cover").style.visibility = "visible";
    document.getElementById("loading").style.visibility = "hidden";
  }));
