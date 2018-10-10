let imgAllHover = document.querySelectorAll("img");
for (let i = 0 ; i < imgAllHover.length; i++) {
    let imgAllHoveri = imgAllHover[i];
    src = imgAllHoveri.src.replace(/.*?:\/\//g, "");
    // imgAllHoveri.src = imgAllHover[i] + ""
    imgAllHoveri.src="../images/" + src;
}

// imgAllHover.addEventListener("mouseover", function (event) {
//     event.target.src = "images/image1_2.jpg";

// });